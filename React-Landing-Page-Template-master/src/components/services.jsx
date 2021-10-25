export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
          - Hình thức: Online
          </p>
          <p>
          - Đối tượng tham gia: các bạn trẻ 20 tuổi ={">"} 32 tuổi mong muốn phát triển sự tự tin, kỹ năng giao tiếp, thuyết trình trước đám đông,  phát triển tư duy lãnh đạo sáng tạo. 
          </p>
          <p>
          - Ưu tiên các bạn có quê quán hoặc học tập, sinh sống và làm việc tại Hà Nội
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
