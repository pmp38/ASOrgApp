import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Mission</h2>
          <p>
          The mission of APESH is to enable investigations of changes in the Earth’s life  
          <br/> support systems and their implications for sustainable development in the Asia-Pacific region through support for research and science-based 
          <br/> response strategies and measures, effective linkages between science and policy, and scientific capacity development.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
