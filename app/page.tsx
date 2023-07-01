import ClientOnly from "./components/ClientOnly"
import FormCreate from "./components/form/FormCreate"

export default function Home() {
  return (
    <div>
      <ClientOnly>
        <FormCreate />
      </ClientOnly>
    </div>
  )
}
