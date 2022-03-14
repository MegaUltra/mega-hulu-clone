import Card from "./Card"


function SectionCards({title, }) {
  return (
    <section className="bg-black p-5">
        <h2 className="text-white text-4xl md:text-4xl font-semibold md:mb-5">{title}</h2>
        <div className="flex space-x-5 py-5 px-10 pb-6 overflow-x-scroll overflow-y-hidden scrollbar-hide">
            
        <Card imgUrl='/images/splash-1080p.jpg' title='Flips n jack' description='fooooo yo bruh all up ins pleep plorp absolute jackinjeffboots' date='1994'/>
        <Card imgUrl='/images/splash-1080p.jpg' title='Flips n jack' description='Lorem ipsum dolor sit amet, mea ad alienum explicari. Elit concludaturque mea et, per saepe integre definitionem ut, mel molestiae scribentur cu. Vide adipiscing mediocritatem at est, ius ne dicta molestiae honestatis. Ea sapientem argumentum vix, commodo aperiam consectetuer ex nec. Pri debitis molestie splendide eu, ne has nemore nominati.

Enim congue apeirian has ea, sumo explicari mea an. Vel utroque suscipit suscipiantur ad. Soluta nostrum praesent ne vel. Eum ex stet doming eirmod, epicurei expetendis omittantur id nec. Dicunt constituam est ut, accumsan scriptorem no vix, fugit mediocritatem cu vis. Mea zril imperdiet forensibus in.' date='1994'/>
        <Card imgUrl='/images/splash-1080p.jpg' title='Flips n jack' description='His quaestio mediocritatem te, et pro suas pertinax. Te qui partiendo gloriatur posidonium, eos in scripta corpora. Et menandri persequeris instructior mea, eius senserit an qui. An assum paulo nonumy sit. Per meliore officiis cu, ne esse facilisis interesset per. Solet omnium sit ex, ex est quas nobis.

Usu fastidii aliquando ex, est ei liber iisque labitur. Tation oportere duo ex. Vidit propriae sed an, atqui partem ornatus ei duo. In enim vidisse pro, no sed facilis perpetua adversarium. Ignota albucius pro et, cum latine repudiandae definitionem ei.' date='1994'/>
        <Card imgUrl='/images/splash-1080p.jpg' title='Flips n jack' description='fooooo yo bruh all up ins' date='1994'/>
        <Card imgUrl='/images/splash-1080p.jpg' title='Flips n jack' description='fooooo yo bruh all up ins' date='1994'/>
        <Card imgUrl='/images/splash-1080p.jpg' title='Flips n jack' description='fooooo yo bruh all up ins' date='1994'/>
        <Card imgUrl='/images/splash-1080p.jpg' title='Flips n jack' description='fooooo yo bruh all up ins' date='1994'/>
        </div>
        </section>
        
  )
}

export default SectionCards