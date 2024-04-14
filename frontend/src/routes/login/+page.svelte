<script>
    import Button from '$lib/components/atoms/ButtonUi.svelte';

    let email = '';

    const handlerSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };

    const connectWithGoogle = () => {
        // handle Google connection
    };
</script>

<div class="c-login">
    <div>
        <h4 class="text-black">Bienvenue !</h4>
        <p class="text-black">Connectez-vous pour accéder à votre compte.</p>

        <form on:submit={handlerSubmit}>
            <div class="c-input">
                <span class="c-input__subtitle">Email address</span>
                <input
                        class="c-input__subtitle__input"
                        type="email"
                        placeholder="example@example.com"
                        bind:value={email}
                        required
                />
            </div>

            <Button label="Se connecter" type="submit" size="large"/>

            <hr/>

            <Button
                    label="Se connecter avec google"
                    type="button"
                    size="large"
                    on:click={connectWithGoogle}
            />
        </form>
    </div>
</div>
