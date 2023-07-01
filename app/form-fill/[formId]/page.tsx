import ClientOnly from '../../components/ClientOnly'
import FormFill from '../../components/form/FormFill'

const FormFillPage = () => {

    return (
        <>
            <ClientOnly>
                <FormFill />
            </ClientOnly>
        </>
    )
}

export default FormFillPage