import Pet from "./Pet";

const PetManager = () => {
    return ( 
        
        <>
            <Pet  name="Cheese" phoneNumber="0113 PATDOG" address="My Living room" cute={true}/>
            <Pet name="Mash" phoneNumber="Ate phone" address="Under the desk" image ="https://www.hdwallpapers.in/download/puppy_eyes_beagle-1280x800.jpg" cute ={false}/>
        </>
     );
}
 
export default PetManager;