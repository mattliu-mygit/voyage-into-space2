import React from 'react';
import connect from '../connect.png';
import databases from '../databases.png';
import collegehelps from '../collegehelps.png';
import Collapsible from './Collapsible';
import insertdocument from '../insertdocument.png';
import exampleinsert from '../exampleinsert.png';
import ObiWanHelps from '../ObiWanHelps.png';
import pen from '../pen.png';

class UsingMongoPage extends React.Component {
  render() {
    return (
      <>
        <div className="placeholder"> |</div>
        <div className="main-content">
          <h2>Using Mongo Atlas to Add, Modify, and Delete Data</h2>
          <p>
            Create a free MongoDB account{' '}
            <a href="https://account.mongodb.com/account/register">here</a> and
            register a free MongoDB Atlas account{' '}
            <a href="https://www.mongodb.com/cloud/atlas/register">here</a>.
          </p>
          <p>Download both MongoDB and MongoDB Atlas.</p>
          <p>Start up Atlas. You should see a screen like this </p>
          <Collapsible
            title="Click this to see image"
            content={<img alt=";(" src={connect} style={{ width: '95%' }} />}
          />
          <p style={{ marginTop: '1rem' }}>
            Paste
            "mongodb+srv://username:password@jhu-help.eax6k.mongodb.net/test?authSource=admin&replicaSet=atlas-si0btc-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
            into the connection screen location.
          </p>
          <p>
            Replace the username and password with the given username and
            password for the JHU Help admin account.
          </p>
          <p>Press 'connect'.</p>
          <p>
            Once connected, you should see the available databases as shown
            below. The one we want to access is JHU-Help. Click it.
          </p>
          <Collapsible
            title="Click this to see image"
            content={<img alt=";(" src={databases} style={{ width: '95%' }} />}
          />
          <p style={{ marginTop: '1rem' }}>
            You should be able to see the various collections used for this
            website now. Click the one you want to add/delete data. from. In our
            case for the sake of example, we click our 'collegehelps' collection
            as you can see below.
          </p>
          <Collapsible
            title="Click this to see image"
            content={
              <img alt=";(" src={collegehelps} style={{ width: '95%' }} />
            }
          />
          <p style={{ marginTop: '1rem' }}>
            Click 'Add Data' and 'Insert Document'.
          </p>
          <p>
            Now a poppup will appear allowing you to type in data in JSON
            format.
          </p>
          <p>The structure of our data is shown below.</p>
          <Collapsible
            title="Click this to see image"
            content={
              <img alt=";(" src={insertdocument} style={{ width: '95%' }} />
            }
          />
          <p style={{ marginTop: '1rem' }}>
            The main_title is the title of the tab that you want to insert. The
            main_content is the hidden body, revealed once you click on the tab.
          </p>
          <p>Let's call our added data main_title "Obi Wan Kenobi"</p>
          <p>
            The main_content is written in JSX. Type in{' '}
            {
              "<p style={{ marginBottom: '1rem', marginTop: '2rem' }}><b> Minor Inside Bolded Title </b></p>"
            }{' '}
            to make a bolded title in the content. Otherwise, type in{' '}
            {'<p> Normal text you want to show in content. </p>'} to display
            regular text like the text you are reading right now. For the sake
            of example, I made a bolded title "Greetings" and content "Hello
            There". You can see my insert text below.
          </p>
          <Collapsible
            title="Click this to see image"
            content={
              <>
                <img alt=";(" src={exampleinsert} style={{ width: '95%' }} />
                <p>
                  My main_content string was "
                  {
                    "<p style={{ marginBottom: '1rem', marginTop: '2rem' }}><b>Greetings</b></p><p>Hello There</p>"
                  }
                  ".
                </p>
              </>
            }
          />
          <p style={{ marginTop: '1rem' }}>
            To insert the data we now press 'insert'. Congrats! You should see
            the new data in the collection.
          </p>
          <p>
            If there is an error, paste it in a notepad or word document and
            double check your string.
          </p>
          <p>
            The data should be displayed in the collegehelps page now as you can
            see, with our tab, bolded content, and normal content.
          </p>
          <Collapsible
            title="Click this to see image"
            content={
              <img alt=";(" src={ObiWanHelps} style={{ width: '95%' }} />
            }
          />
          <p style={{ marginTop: '1rem' }}>
            Uh oh! What if we need to update data to make a change?
          </p>
          <p>
            Go back to Atlas, hover over your data in the collection, and to the
            right, you'll see 4 symbols as shown below. Click the pen (leftmost
            symbol).
          </p>
          <Collapsible
            title="Click this to see image"
            content={<img alt=";(" src={pen} style={{ width: '95%' }} />}
          />
          <p style={{ marginTop: '1rem' }}>
            Now, tap on the part you want to change, and change it! Remember to
            hit 'Update' at the end to update the data!
          </p>
          <p>But what if we want to delete?</p>
          <p>
            Simply look at the 4 symbols we saw earlier to the right of the data
            and click the trash can (rightmost symbol) and click delete!
          </p>
          <p>
            WARNING THIS IS PERMANENT DON'T DELETE RANDOMLY AND BACKUP YOUR
            DATA.
          </p>
        </div>
      </>
    );
  }
}

export default UsingMongoPage;
