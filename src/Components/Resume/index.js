import {useState} from 'react'
import {BsFillCaretDownFill, BsFillCaretLeftFill} from 'react-icons/bs'


export const Resume = () => {

  const [showExp, setShowExp] = useState(false)
  const [showEdu, setShowEdu] = useState(false)
  const [showAwa, setShowAwa] = useState(false)

  return (
    <div className="resume">
      <div className='resume-heading' onClick={() => setShowEdu(!showEdu)}><h2 >Education </h2><h3>{showEdu? <BsFillCaretLeftFill/> : <BsFillCaretDownFill/>}</h3></div>
      {showEdu && <div><h3>App Academy</h3>
      <h5>24-week javascript/python Software Engineering bootcamp</h5>
      <h5>Sep 2021 - Mar 2022</h5>
      <ul>
        <li>1,000 hours of curriculum time</li>
        <li>4 full-stack projects built with JavaScript, React, and Python</li>
        <li>Extensive pair programming and group project experience</li>
      </ul>
      <h3>Lewis & Clark College</h3>
      <h5>B.A World Languages, Mandarin Chinese & French, GPA: 3.49</h5>
      <h5>Sep 2015 - may 2018</h5>
      <ul>
        <li>Fall 2016 CET Beijing Mandarin Intensive Study Abroad</li>
        <li>Spring 2017 L&C College in Strasbourg</li>
        <li>Wine columnist, Lewis & Clark Pioneer Log</li>
        <li>President, Lewis & Clark Dinner Club</li>
      </ul></div>}

      <div className='resume-heading' onClick={() => setShowExp(!showExp)}><h2 >Experience </h2><h3>{showExp? <BsFillCaretLeftFill/> : <BsFillCaretDownFill/>}</h3></div>
      {showExp && <div><h3>Retail Sales</h3>
      <h5>Newport wine cellar + gourmet, newport, RI</h5>
      <h5>Jan 2021 - Aug 2021, Apr 2022 - present</h5>
      <ul>
        <li>
          Engaged, enthused, empowered and educated customers about wine,
          translating my technical knowledge of wine into easy to understand
          plainspeak.
        </li>
        <li>
          Managed a constantly-rotating inventory of around 300 SKUs,
          merchandising, tracking stock levels and creating/updating product
          listings ensuring a harmonious online/in-person shopping experience.
        </li>
        <li>
          Assisted ownership in the execution of monthly(ish) tastings for
          hundreds of individuals across the United States, ensuring timely
          delivery of goods to all participants.
        </li>
      </ul>

      <h3>assistant beverage director</h3>
      <h5>Brenton Hotel, Newport, RI</h5>
      <h5>Jul 2020 - Feb 2021</h5>
      <ul>
        <li>
          Managed an inventory of over $30,000 of beer, wine, and liquor,
          curating an original and eclectic bar program that highlighted local
          and small-scale producers.
        </li>
        <li>
          Trained front-of-house staff on standards of service for all aspects
          of the restaurant, including guest interaction.
        </li>
      </ul>

      <h3>Sales + Operations Coordinator, Harvest Intern</h3>
      <h5>Division Wine Co, Portland, OR</h5>
      <h5>Aug 2019 - May 2020, Aug 2018 - Dec 2018, respectively</h5>
      <ul>
        <li>
          Oversaw the winery’s e-commerce business, from communication with
          customers, to tracking physical inventory, to fulfilling orders and
          ensuring proper delivery.
        </li>
        <li>
          Collaborated with distributors in over 20 different domestic and
          international markets to ensure wholesale wine was delivered quickly
          and accurately.
        </li>
        <li>
          Maintained tax compliance for the winery on a monthly, quarterly, and
          annual basis with the corresponding federal and state level
          authorities.
        </li>
      </ul>

      <h3>Admissions & Marketing Assistant</h3>
      <h5>Northwest Chinese Academy, Aloha, OR</h5>
      <h5>Jan 2019 - Aug 2019</h5>
      <ul>
        <li>Spearheaded the updating of the school’s website and promotional materials</li>
        <li>Worked closely with the principal to develop marketing strategies to increase enrollment</li>
        <li>Relied on Mandarin Chinese to communicate with staff, students, and prospective parents</li>
      </ul></div>}

      <div className='resume-heading' onClick={() => setShowAwa(!showAwa)}><h2 >Awards </h2><h3>{showAwa? <BsFillCaretLeftFill/> : <BsFillCaretDownFill/>}</h3></div>
      {showAwa && <div><h3>Chinese Government Scholarchip, full-ride</h3>
      <h5>Donghua University, Shanghai, CN</h5>
      <h5>Sep 2020 - Aug 2021</h5>
      <h3>Taiwan US Alliance Summer Ambassador Program</h3>
      <h5>National Cheng Kung University, Tainan, TW</h5>
      <h5>Jul 2016 - Aug 2016</h5>
      </div>}
    </div>
  );
};
