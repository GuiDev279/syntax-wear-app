export const SubscriptionForm = () => {
    return (
        <form className="flex flex-col gap-3">
            <label htmlFor="newsletter">
                Inscreva-se em nosso e-mail
            </label>
            <input 
            type="email" 
            id="newsletter" 
            placeholder="Seu melhor e-mail" 
            className="text-black rounded-[30px] bg-white py-3 px-5 placeholder-[#AAAAAA]" />
        </form>
    )
}