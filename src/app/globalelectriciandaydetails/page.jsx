import DayphotoSection from "@/components/globalelectriciandaydetails/sections/dayphotossection"
import DetailsHero from "@/components/globalelectriciandaydetails/sections/detailshero"
import Eventoverview from "@/components/globalelectriciandaydetails/sections/eventoverview"
import RemembeSection from "@/components/globalelectriciandaydetails/sections/RememberSection"

const globalelectriciandaydetails = () => {
    return (
        <div>
            <DetailsHero />
            <RemembeSection />
            <Eventoverview />
            <DayphotoSection />
        </div>
    )
}
export default globalelectriciandaydetails