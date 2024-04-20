import { HttpContext } from '@adonisjs/core/http'
import axios from 'axios'
import PublicBusinessData from '#models/public_business_data'

export default class ScrappersController {
  async sirene({ request, response, auth }: HttpContext) {
    const user = auth.user!
    const data = request.only(['siren_number'])

    console.log('requestData', data.siren_number)

    const client = await axios.get(
      `https://api.insee.fr/entreprises/sirene/V3.11/siren/${data.siren_number}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SIRENE_API_KEY}`,
        },
      }
    )

    if (!client) {
      return response.notFound()
    }

    console.log('client', client)

    const publicBusinessData = await PublicBusinessData.create({
      user_id: user.id,
      siren_number: client.data.uniteLegale.siren,
      company_name: client.data.uniteLegale.prenomUsuelUniteLegale,
      legal_structure: client.data.uniteLegale.categorieEntreprise,
      legal_status: client.data.uniteLegale.statutDiffusionUniteLegale,
    })

    if (!publicBusinessData) {
      return response.badRequest()
    }

    console.log('publicBusinessData', publicBusinessData)
    return response.created('client')
  }
}
