
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-crypto-dark text-white">
      <Header />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto bg-crypto-medium p-8 rounded-lg border border-white/10">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-400 mb-4">Last Modified: March 3, 2025</p>
          
          <div className="space-y-6">
            <p>
              This website is owned and operated by myCBTC.com. We respect your privacy and understand that you have a right to know why we collect your personal information and how we use it. This Privacy Policy applies both to information we collect through our Website and to information we may gather offline.
            </p>
            
            <p>
              This policy describes the types of information we collect from you—and/or that you provide to us—when you visit or use our Website (and any related mobile applications and services, hereafter collectively referred to as the "Website"). For purposes of this Policy, "you," "your," and "user(s)" refer to any individual who accesses our Website.
            </p>
            
            <p>
              By accessing the Website, you acknowledge and agree to this Privacy Policy, our Website Terms and Conditions, and any other policies posted on the Website. If you have any questions or do not understand any part of this Policy, please contact us at support@myCBTC.com. If you do not agree with this Privacy Policy, please do not use the Website or submit any Personal Information to us.
            </p>
            
            <p>
              We reserve the right to change or update this Privacy Policy at any time by posting changes on the Website or by notifying you via email. Any amendments will be effective immediately upon posting. You can determine if this Policy has changed by checking the "Last Modified" date at the top of this document. Your continued use of the Website following any changes constitutes your acceptance of the updated Policy.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">YOUR SECURITY</h2>
            <p>
              We take commercially reasonable physical, electronic, and administrative measures to safeguard your Personal Information. These measures include limiting physical access to our servers and databases, as well as using industry-standard electronic security systems and password protections to guard against unauthorized access.
            </p>
            
            <p>
              However, no data transmission over the Internet can be guaranteed as 100% secure. While we strive to secure the information you transmit through our Website, you do so at your own risk. We cannot guarantee that your Personal Information will not be intercepted by third parties, nor will we be liable for any breach of security arising from events beyond our control—including but not limited to your own actions, storage media failures, third-party security defects, power outages, natural events, vandalism, hacking, sabotage, or terrorism.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">INFORMATION WE COLLECT</h2>
            <p>
              We collect Personal Information in two ways: directly from you and automatically through your use of our Website.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Personal Information You Provide to Us</h3>
            <p>
              When you interact with our Website, you may provide Personal Information such as:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Contact Details: Name, email address, telephone number, and shipping/billing addresses.</li>
              <li>Account Data: Login credentials and account details.</li>
              <li>Personal Preferences & Purchase History: Including wish lists, marketing preferences, and order details.</li>
              <li>Payment Information: Credit card or payment details processed securely via a third-party payment processor.</li>
            </ul>
            
            <p className="mt-4">
              We typically collect this information when you sign up for our email list, place an order, communicate with us, register an account, or participate in promotions, surveys, or contests. Additional details may be collected at the point of submission or with your consent.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Automated Information</h3>
            <p>
              We also collect certain information automatically when you visit our Website ("Automated Information"), which may include:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>The IP address of the device you use to access the Internet (which can indicate your geographic location).</li>
              <li>Unique device identifiers, browser type, device characteristics, and operating system details.</li>
              <li>Your language preferences and referral URLs (including the websites you visited before coming to our Website).</li>
              <li>Information on your actions on our Website, such as pages visited, dates and times of visits, and interactions with content.</li>
            </ul>
            
            <p className="mt-4">
              Most web browsers automatically accept cookies. If you prefer not to receive cookies, you may adjust your browser settings accordingly; however, please note that some features of our Website might not function as intended. Third parties may also use cookies, plug-ins, or widgets on our Website to deliver targeted advertisements.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">HOW WE USE YOUR PERSONAL INFORMATION</h2>
            <p>
              We do not engage in fully automated decision making. Instead, we use Personal Information—including de-identified or aggregated data—to better understand our users and enhance your experience. Common uses include:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Order Fulfillment: Processing and delivering your orders.</li>
              <li>Communication: Informing you about the status of your order or updates on our products and promotions.</li>
              <li>Advertising: Tailoring and delivering advertisements that we believe may interest you.</li>
              <li>Security: Detecting and responding to security incidents, and preventing fraudulent or illegal activity.</li>
              <li>Contractual Obligations: Fulfilling any contractual obligations we have with you.</li>
              <li>Legal Compliance: Meeting legal or regulatory requirements.</li>
            </ul>
            
            <p className="mt-4">
              By providing your email address and taking affirmative actions (such as checking a box or clicking a "complete" button), you consent to receive emails from us.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">SHARING YOUR PERSONAL INFORMATION</h2>
            <p>
              We are committed to maintaining your trust. We do not sell your Personal Information to third parties. We may share your information with:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Affiliates and Partners: For their direct marketing efforts, or as part of a cooperative database for targeted advertising.</li>
              <li>Service Providers: Third parties who assist us in managing customer data, processing orders, distributing emails, storing and analyzing data, fraud prevention, customer service, and order fulfillment.</li>
              <li>Business Transitions: In the event of a merger, acquisition, or sale of assets, your Personal Information may be transferred as part of the transaction.</li>
              <li>Legal Disclosures: When required by law, to comply with legal obligations, or to protect the rights, property, or safety of our users or the public.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">TARGETED ADVERTISING AND REMARKETING</h2>
            <p>
              We work with third-party advertisers to display tailored ads on other websites and mobile applications. These advertisers may track your online activities using cookies, web server logs, and web beacons to display advertisements based on your interests. They may collect data about your visits to various websites and use that information to show you targeted ads. Some advertising networks participate in initiatives like the Network Advertising Initiative (NAI) which provides a central opt-out location at www.networkadvertising.org.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">OTHER WEBSITES</h2>
            <p>
              Our Website may contain links to third-party websites. These links do not imply any endorsement of the linked sites or the products and services they offer. We are not responsible for the privacy practices or content of these external sites. If you provide Personal Information on a third-party site, it is governed by that site's privacy policy.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">YOUR CHOICES AND OPTING OUT</h2>
            <p>
              You may choose not to provide certain Personal Information; doing so may affect your experience on our Website. We will not discriminate against you for exercising your privacy rights.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Tracking Tools</h3>
            <p>
              We use several tools to help us provide and improve our services:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Cookies: Small files stored on your device to enhance your browsing experience, customize content, and for analytics. You can manage your cookie preferences through your browser settings. Please note that disabling cookies may affect website functionality.</li>
              <li>Web Beacons: Tiny images or pixel tags used to collect usage data.</li>
              <li>Analytics: We may use third-party services (including Google Analytics) to analyze your use of our Website. Google Analytics collects data such as your IP address, which is anonymized using the "anonymizeIp" extension.</li>
              <li>Mobile Device Identifiers: These help us understand user behavior on mobile devices for improved personalization.</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Promotional Offers</h3>
            <p>
              If you prefer not to receive promotional emails, you may opt out by checking the appropriate box during sign-up, updating your preferences in your account, or clicking the "unsubscribe" link in our emails. Please allow up to ten (10) business days for these changes to take effect. Note that essential service-related communications (such as order confirmations) will still be sent.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Advertising Opt-Out</h3>
            <p>
              If you do not want us to use your Personal Information for targeted advertising, you may opt out via third-party tools such as TRUSTe's Ad Preference Manager, the Digital Advertising Alliance's choice page, or the NAI opt-out tool. Keep in mind that opting out may not prevent all data collection (for example, for fraud prevention or operational purposes).
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">DISCLOSURE FOR LEGAL PURPOSES</h2>
            <p>
              You authorize us to disclose your Personal Information if required by judicial or administrative proceedings, law enforcement, or government agencies. We may also disclose your information if we believe it is necessary to investigate improper or illegal conduct related to our Website.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">INFORMATION COLLECTED FROM CHILDREN</h2>
            <p>
              We do not knowingly permit anyone under 18 years of age to use the Website. If we learn that we have collected Personal Information from a child under 18 without proper parental consent, we will take reasonable steps to delete such data.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">CONFIDENTIAL INFORMATION</h2>
            <p>
              Please do not send us any confidential or proprietary information via email or other means. Any suggestions, ideas, or comments submitted to us will be considered non-confidential, and we reserve the right to use, modify, or distribute such information without any obligation or compensation to you. We will only use your name if required by law or if you have given us explicit permission.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">NOTICE TO CALIFORNIA CONSUMERS</h2>
            <p>
              If you are a California resident, you have specific rights under California law. Under California Civil Code Sections 1798.83-1798.84, you may request a notice detailing the categories of Personal Information we share with third parties or corporate affiliates for their direct marketing purposes. At this time, we do not share any Personal Information with third parties or affiliates for direct marketing.
            </p>
            
            <p>
              We do not use or disclose sensitive personal information for any purposes other than those specified in applicable privacy laws (such as CCPA/CPRA).
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Purposes for Collection, Use, and Sharing</h3>
            <p>
              We use and share your Personal Information for various commercial purposes, including:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Legal compliance and audit activities.</li>
              <li>Detecting and preventing security incidents, fraud, or illegal activity.</li>
              <li>Enhancing and improving our services.</li>
              <li>Internal operations and one-time or short-term uses.</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Your Rights (for California Residents)</h3>
            <p>
              You may have the following rights regarding your Personal Information:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Right to Know/Access: Request details about the Personal Information we collect about you, its sources, purposes, and the categories of third parties with whom we share it.</li>
              <li>Right to Delete: Request that we delete your Personal Information.</li>
              <li>Freedom from Discrimination: Enjoy protection from discrimination for exercising your privacy rights.</li>
              <li>Right to Correct: Request corrections to any inaccurate Personal Information.</li>
              <li>Right to Restrict Sensitive Information: Limit the use of your sensitive Personal Information.</li>
              <li>Right to Access Automated Decision-Making Information: Obtain details about data collected through automated processes and opt out of such processing.</li>
            </ul>
            
            <p className="mt-4">
              To exercise these rights, please contact us using the information provided in the Contact Us section. We may need to verify your identity before processing your request.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">HOW LONG WE RETAIN YOUR INFORMATION</h2>
            <p>
              We retain your Personal Information for as long as necessary to provide our services to you. In some cases, we may retain it longer to comply with legal obligations. After that, we may keep de-identified or aggregated data that cannot be linked to you personally.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">ASSIGNMENT</h2>
            <p>
              We may assign this Privacy Policy or any of our rights and obligations hereunder to any successor without prior notice.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">DISPUTES</h2>
            <p>
              Any disputes arising out of or relating to this Privacy Policy shall be governed by the laws of the State of Delaware, without regard to its conflict of law principles.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">CONTACT US</h2>
            <p>
              If you have any questions about your privacy or security on the Website or wish to update your Personal Information, please contact us at:
              <br />
              Email: support@myCBTC.com
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
