
import ClientOnly from "../components/ClientOnly";
import FormList from "../components/form/FormList";

const FormListPage = () => {

    return (
        <>
            <ClientOnly>
                <FormList />
            </ClientOnly>
        </>
    )
}

export default FormListPage