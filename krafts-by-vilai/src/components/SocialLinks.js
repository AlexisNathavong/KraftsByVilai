import React from 'react';

export default function SocialLinks() {
  return (
    <>
      <div className='links'>
        {/* Facebook */}
        <a
          className='facebook'
          target='_blank'
          rel='noopener noreferrer'
          title='follow me on facebook'
          href='https://www.facebook.com/Krafts-By-Vilai-106796831311451'
        >
          <img
            alt='follow me on facebook'
            src='https://c866088.ssl.cf3.rackcdn.com/assets/facebook30x30.png'
          />
        </a>
        {/* Instagram */}
        <a
          className='instagram'
          target='_blank'
          rel='noopener noreferrer'
          title='follow me on instagram'
          href='https://www.instagram.com/kraftsbyvilai/'
        >
          <img
            alt='follow me on instagram'
            src='https://c866088.ssl.cf3.rackcdn.com/assets/instagram30x30.png'
          />
        </a>

        {/* Gmail */}
        <a
          className='gmail'
          target='_blank'
          rel='noopener noreferrer'
          title='contact me'
          href='mailto:kraftsbyvilai@gmail.com?subject=here'
        >
          <img
            alt='contact me'
            src='https://www.gannett-cdn.com/-mm-/1d20aed76516db22be4c24904f1a271395ec6a76/c=10-0-569-419/local/-/media/2017/04/22/USATODAY/usatsports/gmail-icon-pixabay_large.png?quality=50&width=50'
          />
        </a>
      </div>
    </>
  );
}


