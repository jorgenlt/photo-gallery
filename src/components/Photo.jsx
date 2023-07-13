const Photos = props => {
  return(
    <li
      data-aos="fade-up"
      data-aos-offset="-50"
      data-aos-delay="0"
      data-aos-duration="800" 
    >
      <img src={`/${props.photo}`} alt={props.photo}/>
    </li>
  )
}

export default Photos