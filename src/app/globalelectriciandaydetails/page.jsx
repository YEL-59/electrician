import DayphotoSection from "@/components/globalelectriciandaydetails/sections/dayphotossection"
import DetailsHero from "@/components/globalelectriciandaydetails/sections/detailshero"
import Eventoverview from "@/components/globalelectriciandaydetails/sections/eventoverview"
import { MemoryVideo } from "@/components/globalelectriciandaydetails/sections/memoryVideo"
import RemembeSection from "@/components/globalelectriciandaydetails/sections/RememberSection"
import Sponsors from "@/components/globalelectriciandaydetails/sections/sponsors"

const globalelectriciandaydetails = () => {
    return (
        <div>
            <DetailsHero />
            <RemembeSection />
            <Eventoverview />
            <DayphotoSection />
            <Sponsors />
            <MemoryVideo />
        </div>
    )
}
export default globalelectriciandaydetails