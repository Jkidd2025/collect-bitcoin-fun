
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="bg-crypto-dark min-h-screen text-white">
      <Header />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-amber-500 font-bold py-3 px-6 bg-amber-500/10 rounded-lg inline-block uppercase tracking-wider border border-amber-500/20">
            CRYPTO EXPERIMENT: NO GUARANTEES, HIGH RISK
          </p>
        </motion.div>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-bitcoin">CBTC CARDS</h2>
          <p className="text-gray-400">Last Modified: March 6, 2025</p>
          
          <p>The website located at www.mycbtc.com (the "Website") is the intellectual property of CBTC (hereinafter collectively referred to as "we," "our," or "us"). The following Terms and Conditions also incorporate by reference our Privacy Policy, and any and all other applicable operating rules, policies, schedules and other terms and conditions or documents that may be published from time to time (collectively, the "Terms and Conditions" or this "Agreement"). Our Website, together with any content, functionality, and services offered on or through our Website, and all of the existing and any updated or new content, features, functionalities, materials, social media pages, shall be collectively referred to as the "Services."</p>

          <p>These Terms and Conditions explain the terms and conditions by which you may access and use the Services provided by us. Please review these Terms and Conditions carefully before accessing the Website or any of the Services. The Terms and Conditions supersede all prior or contemporaneous agreements, representations, warranties and/or understandings with respect to your use of the Services. If you do not agree to the Terms and Conditions in its entirety, you should not use the Website or any of the Services in any manner or form whatsoever.</p>

          <p className="font-semibold">THIS AGREEMENT CONTAINS DISCLAIMERS OF WARRANTIES, LIMITATIONS OF LIABILITY, RELEASES, CLASS-ACTION WAIVER, AND THE REQUIREMENT TO ARBITRATE ANY AND ALL CLAIMS THAT MAY ARISE HEREUNDER AGAINST CBTC, ITS AFFILIATES, MANAGERS, MEMBERS, SERVICE PROVIDERS, PARTNERS, ADVISORS, AND VENDORS (COLLECTIVELY, "COVERED PARTIES"), WHO ARE THE EXPRESS THIRD-PARTY BENEFICIARIES OF THE MANDATORY ARBITRATION PROVISION. THE AFOREMENTIONED PROVISIONS ARE AN ESSENTIAL BASIS OF THIS AGREEMENT.</p>

          <p>You agree to the Terms and Conditions in its entirety when you: (a) access or use the Website; (b) access and/or view any of the: (i) links to third-party resources and other information ("Third-Party Links") through the Website; and/or (ii) videos, audio, stories, testimonials, text, photographs, graphics, artwork, information and/or other content that may be featured on the Website (the "Website Content," and together with the Third-Party Links, the "Content"); (d) purchase any of the Solana blockchain-based fungible cryptographic assets known as "CBTC Cards" or "CBTC" featured on the Website; and/or (e) utilize the various registration forms, contact forms and/or contact information made available on the Website.</p>

          <p className="font-semibold">THE CBTC ARE INTENDED TO FUNCTION AS AN EXPRESSION OF SUPPORT FOR, AND ENGAGEMENT WITH, THE IDEALS AND BELIEFS EMBODIED BY THE SYMBOL "CBTC" AND THE ASSOCIATED ARTWORK, AND ARE NOT INTENDED TO BE, OR TO BE THE SUBJECT OF, AN INVESTMENT OPPORTUNITY, INVESTMENT CONTRACT, OR SECURITY OF ANY TYPE. NO FEDERAL OR STATE AGENCY OR ANY OTHER GOVERNMENTAL AUTHORITY HAS PASSED ON OR MADE ANY RECOMMENDATION OR ENDORSEMENT OF THE CBTC OR THE FAIRNESS OR SUITABILITY OF THE PURCHASE OF THE CBTC, NOR HAS ANY GOVERNMENTAL AUTHORITY PASSED UPON OR ENDORSED THE MERITS OF THE SERVICES.</p>

          <p className="font-semibold">NEITHER THE CBTC NOR THE SERVICES ARE POLITICAL AND HAVE NOTHING TO DO WITH ANY POLITICAL CAMPAIGN, GOVERNMENT AGENCY OR GOVERNMENTAL OFFICE IN THE UNITED STATES OF AMERICA OR ELSEWHERE. THE CBTC ARE NOT INTENDED TO BE DISTRIBUTED TO ANY PERSON OR ENTITY IN ANY JURISDICTION WHERE SUCH TRANSACTIONS ARE RESTRICTED OR PROHIBITED UNDER APPLICABLE LAWS. IT IS YOUR RESPONSIBILITY TO ENSURE COMPLIANCE WITH THE LAWS OF YOUR JURISDICTION IN CONNECTION WITH YOUR PURCHASE, TRADE OR SALE OF THE CBTC. THE CBTC HAVE NOT BEEN REGISTERED UNDER ANY LAWS OF ANY JURISDICTION.</p>

          <h2 className="text-xl font-semibold mt-8">Requirements</h2>
          <h3 className="text-lg font-medium">General.</h3>
          <p>The Services are available only to individuals who can enter into legally binding contracts under applicable law. The Services are not intended for use by individuals under eighteen (18) years of age (or the applicable age of majority, if greater than eighteen (18) years of age in their respective jurisdictions). If you are under eighteen (18) years of age (or the applicable age of majority, if greater than eighteen (18) years of age in your jurisdiction) and/or if you are unable to enter into legally binding contracts and/or you are a Prohibited Party (defined below) you do not have permission to use and/or access the Services, and we may terminate your access to the Services at any time and for any reason in our sole discretion. In the case where you are an entity, you can only access the Services if you are duly incorporated, validly existing and in good standing under the laws of the jurisdiction of your incorporation.</p>

          <h3 className="text-lg font-medium">Prohibited Users.</h3>
          <p>The Services are not available to (i) individuals or entities (including those owned or controlled by individuals) that are the subject of economic or trade sanctions administered or enforced by any governmental authority or otherwise designated on any list of prohibited or restricted parties (including but not limited to the United Nations Security Council, the European Union, His Majesty's Treasury of the United Kingdom of Great Britain and Northern Ireland (the "UK Treasury"), and the U.S. Department of Treasury); (ii) individuals or entities placed on the "Denied Persons List" by the Bureau of Industry and Security of the United States Department of Commerce; or (iii) residents and citizens or entities located in or incorporated under the laws of any country, territory or other jurisdiction subject to a U.S. Government embargo, or that have been designated by the U.S. Government as a terrorist-supporting country, or is otherwise the subject of comprehensive country-wide, territory-wide, or regional economic sanctions by the United Nations, the European Union, the UK Treasury, or the United States, including without limitation Cuba, the Crimea, Donetsk, and Luhansk regions of Ukraine, Iran, North Korea, Russia, Syria, or Yemen (collectively, "Prohibited Users").</p>

          {/* Continue with additional content sections */}
          <h3 className="text-lg font-medium">Prohibited Access.</h3>
          <p>In addition to the foregoing, individuals are not permitted to access the Services with a Jail-Broken Mobile Device, a Rooted Android Device, or the substantial equivalent thereof. For purposes of the Terms and Conditions, a "Jail-Broken Mobile Device" is a Mobile Device that runs Apple's iOS operating system that has had any of its iOS-based software restrictions removed via any procedure that is not fully endorsed and authorized by Apple and a "Rooted Android Device" is a smartphone, tablet or other device running the Android mobile operating system for which privileged root access control has been enabled thereby opening the operating system for additional customization.</p>

          <h3 className="text-lg font-medium">Modification.</h3>
          <p>We reserve the right to amend the Terms and Conditions and/or the Services from time to time without notice to you. The Terms and Conditions will be posted on the Website, and you should review the Terms and Conditions prior to using, reusing, accessing or re-accessing the Services. By your continued use of the Services, you hereby agree to comply with, and be bound by, all of the terms and conditions contained within these Terms and Conditions effective at that time.</p>

          {/* More sections can be added - for brevity, I'm including just a portion of the content */}
          
          <h2 className="text-xl font-semibold mt-8">Contact Us</h2>
          <p>If you have any questions about the Terms and Conditions or the practices of mycbtc.com, please feel free to e-mail us at: support@mycbtc.com.</p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-amber-500 font-bold py-3 px-6 bg-amber-500/10 rounded-lg inline-block uppercase tracking-wider border border-amber-500/20">
            CRYPTO EXPERIMENT: NO GUARANTEES, HIGH RISK
          </p>
        </motion.div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
