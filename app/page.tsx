import ClientOnly from "./components/ClientOnly"
import FormCreate from "./components/FormCreate"

export default function Home() {
  return (
    <div className="max-w-2xl bg-[#EFF0F4] p-2 px-8 rounded-sm mx-auto mt-12">
      <ClientOnly>
        <FormCreate />
      </ClientOnly>
    </div>
  )
}
