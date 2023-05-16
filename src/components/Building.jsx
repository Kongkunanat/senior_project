import { Glass } from './Glass';
import { Wall } from './wall';
import { Ground } from './Ground';
import { Planes } from './Planes';
import { Boxeffect} from './effectbox';
import { Effectforbox } from './effectforbox';
import { Effectforbox1 } from './effectforbox1';
import { Effectforbox2 } from './effectforbox2';
import { Effectforbox3 } from './effectforbox3';
import { Effectforbox4 } from './effectforbox4';
import { Effectforbox5 } from './effectforbox5';
export const Building = () => {

    return (
        <>
            <Wall 
                scale={[3,2.3,3]}
                position={[0,-10,0]}
                mapUrl={process.env.PUBLIC_URL + "/imagess/wall/WhiteWall.jpg"}
            />
            <Glass            
                scale={[7.5, 7.5, 7.5]}
                position={[-0.65, 50, 81]}
                rotation={[0, 0, 0]}
                url={process.env.PUBLIC_URL + "/models/RoofGlass/scene.gltf"}                        
            />
            <Glass            
                scale={[7.5, 7.5, 7.5]}
                position={[-0.65, 50, 81]}
                rotation={[0, 0, 0]}
                url={process.env.PUBLIC_URL + "/models/RoofNoGlass/scene.gltf"}                        
            />
            <Ground         
                marbleAlphaMap={process.env.PUBLIC_URL + "/imagess/ground/BAZALTao.jpg"}         
                marbleMap={process.env.PUBLIC_URL + "/imagess/ground/BAZALTdiffuse.jpg"}                              
            />
            <Planes />
            <Boxeffect />
            {/*ห้อง2 ซ้าย*/}
            <Effectforbox  position={[15, 11.58, 100]} />
            {/*ห้อง2 ขวา*/}
            <Effectforbox1  position={[-16, 11.58, 100]} />
            {/*ห้อง1ริมซ้าย */}
            <Effectforbox4  position={[91, 11.5, 84.5]} />
            {/*ห้อง1ริมขวา */}
            <Effectforbox5  position={[58, 11.5, 84.5]} />
            {/*ห้อง3 ริมขวา */}
            <Effectforbox3  position={[-93, 10.85,84.5]} />
            {/*ห้อง3 ริมซ้าย */}
            <Effectforbox2  position={[-56.95, 10.8,90.5]} />
    
        </>

    )
  }

