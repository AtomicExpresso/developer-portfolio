import React from 'react'
import TopWave from '../../assets/images/decorations/banner-wave-yellow-bottom.svg';
import BottomWave from '../../assets/images/decorations/banner-wave-yellow.svg';
import HammerIcon from '../../assets/images/icons/decor/hammer-solid.svg';
import SkillSet from '../../Data/json/misc/skillSet.json';
import Image from 'next/image';

function HomeSkills(){
  const CreateSkillItem = ({itemName}: {itemName: string}) => {
    return (
      <div className="skill-item">
        <h1>{itemName}</h1>
      </div>
    )
  }

  const BuildSkillSet = () => SkillSet.SkillSet.map(item => {
    return (
      <CreateSkillItem key={item.id} itemName={item.itemName}/>
    )
  })

  return(
    <div className='home-skills'>
      <Image src={TopWave} draggable='false' alt="Page wave"></Image>
      <div className='home-inner-content'>
        <div className='skills-txt'>
          <Image src={HammerIcon} draggable='false' alt="Icon"></Image>
          <h1>Skills</h1>
        </div>
        <hr></hr>
        <div className='skill-item-container'>
          <BuildSkillSet/>
        </div>
      </div>
      <Image src={BottomWave} draggable='false' alt="Page wave"></Image>
    </div>
  )
}

export default HomeSkills;