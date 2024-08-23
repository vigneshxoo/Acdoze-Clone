import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { GrAdd } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";
import './accoridan.css'
//<FiMinus />

export const Accordian = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  const[open,setopen]=useState(false)

  const classes = useStyles();
  return (
    <div className="mr">
      <div className='back-accord'>

        <div className='acr'>

          <div className='faq'>
            <h1 className='faq-f' >FAQs</h1>
            <div className='underline'></div>
          </div>
         

          <div className='accordian'> 


            <div className={classes.root}>
              <Accordion  >
                <div  >

              
                <AccordionSummary   
                  expandIcon={<GrAdd  className={`sidebar ${open ? "open" : ""}`} />}
                  aria-controls ="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}><p className='acor-p'>Why should I do my web design and development from Acodez?</p></Typography>
                </AccordionSummary>
                </div>
                <AccordionDetails onClick={() => setopen(!open)} >
                  <Typography>
                    <p className='acor-content'>
                      Acodez is a leading web design company in India with 10+ years of experience and 16 international awards to its credit. We also have experience working for many leading MNCs for their web design and development projects. Acodez operates from its 6 offices across India and has worked on more than 1000+ web design projects for our clients across the globe, from more than 80 countries.

                      At Acodez, we’re always obsessed to deliver world-class quality projects and this has definitely helped us make a name for ourselves in the web development India arena, by winning multiple international awards in the last 10 years (consistently every year right from 2012 to 2021).
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 222222222222 */}

              <Accordion>
                <AccordionSummary
                  expandIcon={<GrAdd className='slider' />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}><p className='acor-p'>Why is India an ideal choice for web development outsourcing?</p></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className='acor-content'>
                      India is the most sought-after destination for web design outsourcing for decades, mainly because of its ‘cost of quality' advantage. You will get world-class projects delivered from web development companies in India at a fraction of what you pay in the Americas or Europe for a similar project.

                      India has a huge pool of talent that enables both companies and individuals to grab the opportunity for creating fabulous and innovative websites and applications using the latest and advanced technologies. We've put together an article that details more about the benefits of website design outsourcing to India compared to some other destinations.

                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 333333333 */}

              <Accordion >
                <AccordionSummary
                  expandIcon={<GrAdd />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}><p className='acor-p'>How to find the best web design company in India?</p></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className='acor-content'>
                      It would be difficult to find the best web design company India, if you didn't approach it in the right way. There are thousands of companies and everyone claims to offer the same level of service. But it's up to you to do some research on the company that you're considering - especially on their previous works, their credentials, their clients, etc then just compare based on their price. After all, all Indian companies charge a reasonable amount and you don't have to go for the cheapest and compromise on all the other important aspects of your web designing project.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 444444444 */}
              <Accordion >
                <AccordionSummary
                  expandIcon={<GrAdd />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}><p className='acor-p'>How much does it cost to hire a web developer in India?</p></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className='acor-content'>
                      You can hire a web development company in India on a per-project basis, where the cost of the project completely depends on the scope of the project. When you hire on a per-project basis various teams (UX and web designers, front-end developers, back-end developers, testers, etc) would be involved in your project at different stages and there will also be a dedicated project manager assigned.

                      Another option is to hire a dedicated web developer in India on a monthly basis. In this model, the web developer (or web designer or front-end developer) would be working exclusively on your project and all works/tasks will be assigned directly by you. The pricing here would be hourly and usually calculated on a monthly basis.
                      At Acodez, we do offer both of these models.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 5555555 */}
              <Accordion >
                <AccordionSummary
                  expandIcon={<GrAdd />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}><p className='acor-p'>Do you do custom website design or use pre-built templates?</p></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className='acor-content'>
                      We are a multiple international award-winning website design company in India, that always loves to build top-class custom design websites. We have a dedicated team of award-winning web designers who are capable of visualizing astounding custom-designed websites for our customers, based on their business objectives and target audience, and have been successfully doing this since 2011. We always suggest going with a custom-designed website as it would be more impactful since it's tailor-made exclusively for you. However, if you're constrained with time and/or budget, we can work on customizing some pre-existing templates too for you.

                      If you're still confused between choosing a custom web design or a template option, we have written a blog on custom design websites vs pre-made templates that might give you some more insights on this.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary
                  expandIcon={<GrAdd />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}><p className='acor-p'>In which technology should I do my web development?</p></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className='acor-content'>
                      The technology that you should choose for your web design and web development projects completely depends on the type of project.

                      As a leading web development company in India, we work on a bunch of technology stacks, though below are some recommended ones:
                      So if it's a normal informational website, you can go with any leading CMS like WordPress (or Joomla/ Drupal) and if it's an eCommerce we suggest going with Magento or WooCommerce. If it's a custom web application development, you could consider going with the latest trending technologies like MERN stack or MEAN stack. Kotlin for Android and Swift for iOS for native mobile apps and Flutter or React Native for hybrid mobile app development are the recommended options.

                      Having said that, as the technology opted depends on your requirement and audience targeted, we normally offer a free primary consultation on which technology you should opt for your web designing or development requirement. Just contact us with your requirements for the same!
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
