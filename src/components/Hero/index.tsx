
import Banner from '../../assets/images/banner.jpg'
import { Button } from '../Button'
import { Overley } from '../Overley'

export const Hero = () => {
    return (
        <div className="container m-auto">
            <section className='h-125 rounded-[20px] mb-10 relative'>
                <img src={Banner} alt="Banner" className='w-full h-full object-cover rounded-[20px] ' />

                <Overley title='Krypton One' subtitle='Transforme qualquer passo em presença' className='bottom-0  justify-end  px-6 md:px-24 pb-32'>
                    <Button variant='secondary'>Ver modelos</Button>
                    <Button variant='primary'>Comprar</Button>
                </Overley>
            </section>
        </div>

    )
}