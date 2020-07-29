import React from 'react';
import Collapsible from '../Collapsible';
import { Link } from 'react-router-dom';

const YouHelp = () => {
  return (
    <>
      <div className="main-content covid-content">
        <h2>How you can help in the pandemic!</h2>
        <h5>Help our Healthcare Workers</h5>
        <Collapsible
          title="Maryland Responds Reserve Medical Corps"
          content={
            <>
              <p>
                Open to all: licensed health care professionals, students, or
                even volunteers interested in Emergency Response.
              </p>
              <p>
                Volunteer{' '}
                <a href="https://mdresponds.health.maryland.gov/">here</a>.
              </p>
            </>
          }
        />
        <Collapsible
          title="Girl Scout Cookies for Healthcare Workers"
          content={
            <>
              <p>
                Learn more{' '}
                <a href="https://www.girlscouts.org/en/cookie-care.html">
                  here
                </a>
                .
              </p>
              <p>You can buy a few boxes for yourself!</p>
            </>
          }
        />
        <Collapsible
          title="Sew and Donate Homemade Face Masks"
          content={
            <>
              <p>
                Refer to the Face Mask DIY Project{' '}
                <Link to="/covid-19/diy-fun">here</Link>.
              </p>
            </>
          }
        />
        <Collapsible
          title="Feed it Forward"
          content={
            <>
              <p>
                Money from PekoPeko's Feed it Forward program goes towards
                feeding Baltimore’s healthcare workers and meal programs for
                vulnerable Baltimoreans.{' '}
              </p>
              <p>
                The donations will also help PekoPeko continue to employ its
                staff, which are made mostly of local Baltimoreans too.{' '}
              </p>
              <p>
                Find out more <a href="https://pekopekoramen.com/">here</a>.
              </p>
            </>
          }
        />
        <Collapsible
          title="Cards for Courage"
          content={
            <>
              <p>Donate cards and art supplies to Cards for Courage. </p>
              <p>
                The organization is creating appreciation cards to healthcare
                workers due to the pandemic.{' '}
              </p>
              <p>
                If you are in CALIFORNIA, one of the Cards for Courage Hopkins
                branch founders is looking for people to help her create these
                cards as well.
              </p>
              <p>Email cardsforcourage20@gmail.com for more info.</p>
            </>
          }
        />
        <h5 style={{ marginTop: '3rem' }}>Help out Food Insecurities</h5>
        <Collapsible
          title="Feed it Forward"
          content={
            <>
              <p>
                Money from PekoPeko's Feed it Forward program goes towards
                feeding Baltimore’s healthcare workers and meal programs for
                vulnerable Baltimoreans.{' '}
              </p>
              <p>
                The donations will also help PekoPeko continue to employ its
                staff, which are made mostly of local Baltimoreans too.{' '}
              </p>
              <p>
                Find out more <a href="https://pekopekoramen.com/">here</a>.
              </p>
            </>
          }
        />
        <Collapsible
          title="Invisible Hands"
          content={
            <>
              <p>
                A free grocery delivery service to aid those heavily affected by
                COVID-19.{' '}
              </p>
              <p>
                Volunteer or donate to Invisible Hands in the{' '}
                <b>NY & NJ Area</b>{' '}
                <a href="https://www.invisiblehandsdeliver.com/volunteer">
                  here
                </a>
                .
              </p>
            </>
          }
        />
        <Collapsible
          title="Feeding America"
          content={
            <>
              <p>$1 = 10 meals </p>
              <p>
                The largest network of foodbanks in the United States and aids
                those who cannot apply for food stamps.
              </p>
              <p>
                Donate{' '}
                <a href="https://secure.feedingamerica.org/site/Donation2;jsessionid=00000000.app20048a?idb=49195498&df_id=26876&26876.donation=form1&mfc_pref=T&NONCE_TOKEN=96A992DD42E8A99A023512F5677E568E&s_channel=google&s_onsite_promo=MainNav_Today&s_subsrc=https://www.feedingamerica.org/&s_src=W203ORGSC&26876_donation=form1&s_referrer=google&_ga=2.251417090.527325342.1585436917-1451030443.1585436917">
                  here
                </a>
                .
              </p>
            </>
          }
        />
        <h5 style={{ marginTop: '3rem' }}>Academic Assistance</h5>
        <Collapsible
          title="Inflexible Professors"
          content={
            <>
              <p>
                Refer to reporting inflexible professors{' '}
                <Link to="/covid-19/college-help">here</Link>.
              </p>
            </>
          }
        />
        <h5 style={{ marginTop: '3rem' }}>Childcare/Homeschooling Help</h5>
        <Collapsible
          title="CovEd"
          content={
            <>
              <p>
                A free platform started by university students that pairs
                undergraduate mentors with K-12 students who have been affected
                by school closures. The goal of this virtual service is to
                provide a resource for students including tutoring, college
                preparation, and mentorship.
              </p>
              <p>
                Sign up to be a tutor{' '}
                <a href="http://www.coved.org/signup.html">here</a>.
              </p>
            </>
          }
        />
        <Collapsible
          title="Babysit/petsit"
          content={
            <>
              <p>
                Network of JHU affiliates and Baltimore locals helping each
                other out in this time of need.
              </p>
              <p>
                Offer to babysit/petsit{' '}
                <a href="https://docs.google.com/spreadsheets/d/1ReeJZuaIu1WYKZjCPH0pGC44Ot63P6fNjkZR1yuKt64/edit?usp=sharing">
                  here
                </a>
                .
              </p>
            </>
          }
        />
        <h5 style={{ marginTop: '3rem' }}>
          DIY Projects (PPE, disinfectants, etc.)
        </h5>
        <Collapsible
          title="FaceMasks"
          content={
            <>
              <p>
                Refer to making facemasks in DIY projects{' '}
                <Link to="/covid-19/college-help">here</Link>.
              </p>
            </>
          }
        />
        <h5 style={{ marginTop: '3rem' }}>Report Racism/Hate Crime</h5>
        <Collapsible
          title="Report Here"
          content={
            <>
              <p>
                Refer to <Link to="/covid-19/report">here</Link>.
              </p>
            </>
          }
        />
        <h5 style={{ marginTop: '3rem' }}>Other ways to help</h5>
        <Collapsible
          title="Do not cross the Picket Line"
          content={
            <>
              <p>Don't use Amazon Delivery and Instacart</p>
              <p>
                Amazon Delivery and Instacart are still requiring employees to
                work during the crisis. However, while these employees are
                required to work during these trying times, employers are not
                doing enough to ensure these workers are safe from COVID-19.
              </p>
            </>
          }
        />
        <Collapsible
          title="Baltimore Harm Reduction Coalition (BHRC)"
          content={
            <>
              <p>
                An organization that seeks to help people targeted by the war on
                drugs and anti-sex work policies through naxolene workshops,
                syring exchange programs, and more. More info{' '}
                <a href="https://www.naloxoneforall.org/maryland?fbclid=IwAR0iZL_3SO4EauPdGgJuT-ivHRHztPf5ORofphThY1ccDyWif9L9TMeJXU0">
                  here
                </a>
                .
              </p>
              <p>
                The organization has been providing goodie bags filled with
                snacks, water, condoms, and naxolene to vulnerable Baltimoreans.{' '}
              </p>
              <p>
                Donate{' '}
                <a href="https://www.paypal.com/donate/?token=F3B-0zWDLCppr-rR28O1DSkWhw9F-SN44X8-YpanuxTkvsbfKzRsNYVJEqyaLRPDvFArRW&country.x=US&locale.x=US">
                  here
                </a>
                .
              </p>
            </>
          }
        />
        <Collapsible
          title="Help Syrian Refugee Families from COVID-19"
          content={
            <>
              <p>
                Currently INARA is <b>matching</b> each donation!
              </p>
              <p>
                Often refugee families don’t have running water, soap and other
                cleaning materials to protect themselves from COVID-19.{' '}
              </p>
              <p>
                Donate{' '}
                <a href="https://www.inara.org/covid-19?fbclid=IwAR0fj8C2_5nheYLwmL6UlucmyZjagPl5IObTClk-nGn7Uoku9xjCPVxl2yk">
                  here
                </a>
                .
              </p>
            </>
          }
        />
        <Collapsible
          title="ACLU to sue ICE"
          content={
            <>
              <p>
                ICE is still not taking measures to properly keep those stuck in
                immigration detention from contracting the virus. For more info,
                use the link!
              </p>
              <p>
                Donate{' '}
                <a href="https://www.aclu.org/press-releases/aclu-sues-ice-release-immigrants-especially-vulnerable-covid-19">
                  here
                </a>
                .
              </p>
            </>
          }
        />
        <Collapsible
          title=" LGBTQ+ Youth"
          content={
            <>
              <p>
                LGBTQ+ youth are faced with returning to abusive homes or going
                back into the closet due to mandatory quarantines in many
                states.
              </p>
              <p>
                Donate{' '}
                <a href="https://www.bagly.org/covid19-direct-aid">here</a>.
              </p>
            </>
          }
        />
        <p></p>
      </div>
    </>
  );
};
export default YouHelp;
