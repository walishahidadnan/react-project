import React, {useState} from 'react';

const Faqs = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggler = () => {
      isToggled ? setIsToggled(false) : setIsToggled(true);
    }
  return (
    <div>
      <div className='faq'>
        <div className='content' aria-expanded={isToggled} onClick={toggler}>
            <p>lorem ispum dollar amit sumit</p>
      </div>
      </div>
    </div>
  );
}

export default Faqs;
