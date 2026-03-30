import React from 'react';
// Import your product data if needed, e.g., to get specific details for this product
// import { products } from '../../data/productData';

const DoubleSwitch = () => {
  // You can find the specific product data if your array has an identifier
  // const product = products.find(p => p.id === 'double-switch'); // Example

  return (
    <div className="double-switch-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundColor: '#FFCD69' }}>
        <div className="hero-content">
          <h1 className="hero-title" style={{ color: 'black', fontSize: '42px', fontWeight: 'bold', textAlign: 'center' }}>
            DOUBLE SWITCH
          </h1>
          <hr className="hero-divider" style={{ borderTop: '1px solid #282626', width: '378px', margin: '0 auto' }} />
          <h2 className="hero-subtitle" style={{ color: 'black', fontSize: '21px', textAlign: 'center' }}>
            CONTROL TWO SWITCHES INDIVIDUALLY
          </h2>
          <div className="hero-description collapsible-text" style={{ textAlign: 'center' }}>
            <p style={{ textAlign: 'justify', maxWidth: '684px', margin: '0 auto' }}>
              The ARISS Double Switch (ARS-DS-21) is a retrofit WiFi module that allows you to control two switches individually through a simple and easy-to-use APP or manual switch. This product is unique because it doesn't require any special wiring and works with existing switches. It is a true residential IoT product that can be upgraded over the air and is modularly upgradeable, so customers can keep adding devices as needed. The product has been designed by industry experts with over a decade of experience and has been built from the ground up. With this retrofit module, you can control lights, fans, and other appliances from anywhere, and schedule them to turn on or off at specific times, giving you more control over your energy consumption and home comfort.
            </p>
            {/* You would typically add a "Read More" button/functionality here */}
          </div>

          {/* Placeholder for left and right decorative SVGs (Arrow Vectors) */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div style={{ width: '88px', height: '251px' }}></div> {/* Left Arrow Placeholder */}
            <div style={{ width: '565px', height: '468px', backgroundColor: '#212121', position: 'relative' }}> {/* Video Placeholder */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
                [Product Video Placeholder]
                {/* Play button and mute button SVGs would go here */}
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', display: 'flex', gap: '10px' }}>
                  <span style={{color: 'white'}}>⏵</span> {/* Play Icon Placeholder */}
                  <span style={{color: 'white'}}>🔊</span> {/* Mute Icon Placeholder */}
                </div>
              </div>
            </div>
            <div style={{ width: '88px', height: '251px' }}></div> {/* Right Arrow Placeholder */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" style={{ padding: '50px 0' }}>
        <h2 className="section-title" style={{ fontSize: '42px', textAlign: 'center' }}>Endless Possibilities at Your Fingertips</h2>
        <div className="section-description collapsible-text" style={{ textAlign: 'center', maxWidth: '664px', margin: '20px auto' }}>
          <p style={{ textAlign: 'justify' }}>
            ARISS is a brand for Anyone interested in using high-quality smart home devices to enjoy a whole-house intelligent lifestyle. Our mission is to design and provide Comprehensive solutions to house devices for the enjoyment of our honoured customers.
            <br /><br />
            ARISS offers a smart home solution that is easy to install, operate, and upgrade. With features like compatibility with Alexa, Google Home, and Siri, modular upgradeability, and OTA firmware updates, ARISS provides a convenient and user-friendly solution for enhancing your home's functionality. The products are also backed by a 5-year warranty, giving you added peace of mind. Whether you are looking to upgrade your home's lighting, security, or energy efficiency, ARISS has a solution to meet your needs. So choose ARISS and take your home to the next level of convenience and control.
          </p>
          {/* "Read More" button/functionality here */}
        </div>

        {/* Feature Icons Grid */}
        <div className="features-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
          {/* Feature 1: 5 Years Warranty */}
          <div className="feature-item" style={{ width: '126px', textAlign: 'center' }}>
            <div style={{ height: '129px', backgroundColor: '#eee', marginBottom: '10px' }}></div> {/* Icon Placeholder */}
            <h5>5 Years Warranty</h5>
          </div>
          {/* Feature 2: APP & Voice Control */}
          <div className="feature-item" style={{ width: '126px', textAlign: 'center' }}>
            <div style={{ height: '129px', backgroundColor: '#eee', marginBottom: '10px' }}></div> {/* Icon Placeholder */}
            <h5>APP & Voice Control</h5>
          </div>
          {/* Feature 3: Wi-Fi IoT Solution */}
          <div className="feature-item" style={{ width: '126px', textAlign: 'center' }}>
            <div style={{ height: '129px', backgroundColor: '#eee', marginBottom: '10px' }}></div> {/* Icon Placeholder */}
            <h5>Wi-Fi IoT Solution</h5>
          </div>
          {/* Feature 4: Regular Switches */}
          <div className="feature-item" style={{ width: '126px', textAlign: 'center' }}>
            <div style={{ height: '129px', backgroundColor: '#eee', marginBottom: '10px' }}></div> {/* Icon Placeholder */}
            <h5>Regular Switches</h5>
          </div>
          {/* Feature 5: Regular Wiring */}
          <div className="feature-item" style={{ width: '126px', textAlign: 'center' }}>
            <div style={{ height: '129px', backgroundColor: '#eee', marginBottom: '10px' }}></div> {/* Icon Placeholder */}
            <h5>Regular<br />Wiring</h5>
          </div>
          {/* Feature 6: Easy Sharing with Family */}
          <div className="feature-item" style={{ width: '126px', textAlign: 'center' }}>
            <div style={{ height: '129px', backgroundColor: '#eee', marginBottom: '10px' }}></div> {/* Icon Placeholder */}
            <h5>Easy Sharing with Family</h5>
          </div>
        </div>
      </section>

      {/* Background Image Section 1 */}
      <section className="bg-image-section" style={{ minHeight: '835px', backgroundImage: 'url(https://static.wixstatic.com/media/ea31d6_33c6fb19d9374905a026bdefb7cbd094~mv2.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Content can be added here if needed */}
      </section>

      {/* Switch Types Section */}
      <section className="switch-types-section" style={{ backgroundColor: '#F1F1F1', padding: '50px 0' }}>
        <h2 className="section-title" style={{ fontSize: '42px', textAlign: 'center' }}>Works with all Types of Switches</h2>
        <p className="section-description" style={{ textAlign: 'center', maxWidth: '686px', margin: '20px auto' }}>
          The Double Switch seamlessly integrates with regular wiring and switches, providing you with effortless control over your home automation. Upgrade your existing setup without the need for complex rewiring or specialized switches
        </p>
        <div className="switch-images-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <img src="https://static.wixstatic.com/media/ea31d6_b65e16f36ed64f60ab2a822a85a802bd~mv2.png" alt="Switch type 1" style={{ width: '267px', height: '267px', objectFit: 'cover' }} />
          <img src="https://static.wixstatic.com/media/ea31d6_cbcbbee121ff4a5580013c6d2e3c9724~mv2.png" alt="Switch type 2" style={{ width: '267px', height: '267px', objectFit: 'cover' }} />
          <img src="https://static.wixstatic.com/media/ea31d6_9f83dcc8d3124516b7588cc277173ee3~mv2.png" alt="Switch type 3" style={{ width: '267px', height: '267px', objectFit: 'cover' }} />
          <img src="https://static.wixstatic.com/media/ea31d6_f6e88aaa78554367bd24b36e1edf7a7c~mv2.png" alt="Switch type 4" style={{ width: '267px', height: '267px', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Background Image Section 2 */}
      <section className="bg-image-section" style={{ minHeight: '885px', backgroundImage: 'url(https://static.wixstatic.com/media/ea31d6_f414726e76984b65968e3b0d6249fb9f~mv2.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </section>

      {/* Compact Size Section */}
      <section className="compact-size-section" style={{ padding: '50px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', gap: '50px' }}>
          <img src="https://static.wixstatic.com/media/ea31d6_2f80eb54aa79493da249af04e0f49fbe~mv2.png" alt="Compact module animation" style={{ width: '640px', height: '640px', objectFit: 'cover' }} />
          <div>
            <h2 className="section-title" style={{ fontSize: '42px' }}>Compact Size-Fix inside Switch Board</h2>
            <p style={{ textAlign: 'justify' }}>
              The ARISS Double Switch features a compact size that effortlessly fits within your switchboard, combining convenience and functionality in a sleek design. Upgrade your home automation without sacrificing space with the compact powerhouse of the ARISS Double Switch.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section" style={{ minHeight: '511px', backgroundImage: 'url(https://static.wixstatic.com/media/11062b_cb0c4d13153f4008920bb26beda8de0ff000.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '50px 0' }}>
        <h2 className="section-title" style={{ fontSize: '42px', textAlign: 'center', color: 'white' }}>Explore Various Use Cases</h2>
        <div className="collapsible-text" style={{ maxWidth: '770px', margin: '20px auto', textAlign: 'center' }}>
          <p style={{ textAlign: 'justify', color: 'white' }}>
            With the ARISS Double Switch, you gain the power to remotely control the operation of any electrical device. Easily turn on or off your appliances, such as your washing machine, from anywhere with just a tap on your smartphone. Additionally, ensure safety and peace of mind by cutting the power in case of any malfunctioning or emergency situations. Experience the convenience and control at your fingertips with the ARISS Double Switch, empowering you with remote access to your electrical devices
          </p>
        </div>
        {/* Use Cases Icons */}
        <div className="use-cases-icons" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '927px', margin: '30px auto 0' }}>
          {/* Placeholder for 9 use case icons */}
          {[...Array(9)].map((_, i) => (
            <div key={i} style={{ width: '63px', height: '63px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}></div>
          ))}
        </div>
      </section>

      {/* Simple Installation Section */}
      <section className="simple-installation-section" style={{ backgroundColor: '#F1F1F1', padding: '50px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', gap: '50px' }}>
          <img src="https://static.wixstatic.com/media/ea31d6_a85d27ef55af4d31a9430ca46919a2e3~mv2.png" alt="Installation guide" style={{ width: '486px', height: '322px', objectFit: 'cover' }} />
          <div>
            <h2 className="section-title" style={{ fontSize: '25px', color: '#191919' }}>SIMPLE INSTALLATION</h2>
            <p style={{ textAlign: 'justify' }}>
              Experience the ease of installation and setup with the ARISS Double Switch. Whether you prefer a DIY approach or seek assistance, our user-friendly design ensures a hassle-free installation process.
            </p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
              <a href="https://www.youtube.com/watch?v=VKK5Ik4rSGU" target="_blank" rel="noopener noreferrer">▶ Watch Video</a>
              <a href="https://drive.google.com/file/d/1nKDR6LIOqI89PKjHR5sWlC6hXBzeIYeJ/view" target="_blank" rel="noopener noreferrer">📄 Download Guide</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoubleSwitch;