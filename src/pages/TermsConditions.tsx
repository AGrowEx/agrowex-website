import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Building, Shield, AlertTriangle, Users, Globe } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-4">
            <FileText className="h-8 w-8 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
          </div>
          <p className="mt-4 text-gray-600">
            Please read these terms and conditions carefully before using the Bhoomi App 
            and services provided by AGROWEX Technologies Pvt. Ltd.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          
          {/* Section 1: Scope */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Building className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. Scope</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                This Application is a mobile and/or web application provided by AGROWEX 
                Technologies Pvt. Ltd. (located at #1004, 10th Floor, Genesis Ecosphere 
                Neeladri Road, Bengaluru, 560100) and/or its affiliates.
              </p>
              <p>This App is specifically designed for the use by users of services provided by AGROWEX Technologies Pvt. Ltd. and/or its affiliates, to specified users for the purposes of:</p>
              
              <div className="bg-emerald-50 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• Creating a data-driven farmer ecosystem</li>
                  <li>• Enabling analysis of the soil conditions of agricultural plot of land owned by the farmers</li>
                  <li>• Enabling analysis of the irrigation needs of the agricultural plot of land owned by the farmers</li>
                  <li>• Providing farmers with educational videos</li>
                  <li>• Helping farmers connect with agricultural experts who would answer their queries</li>
                </ul>
              </div>
              
              <p>
                Your use of the App is subject to these terms and conditions ("T&C") 
                and the privacy policy of your enterprise, which shall be read with and 
                be treated as an integral part of this document.
              </p>
            </div>
          </section>

          {/* Section 2: Privacy */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">2. Privacy and Protection of Personal Information</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Please refer to the Privacy Policy for disclosures relating to the 
                collection and use of your personal information arising out of the use 
                of this App.
              </p>
            </div>
          </section>

          {/* Section 3: Modifications */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">3. Modifications</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Modifications of T&C</h3>
                <p>
                  The Company reserves the right to change the T&C under which the Services 
                  are offered, including but not limited to the charges, if any, associated 
                  with the use of the Services. We will notify you whenever any change to 
                  the T&Cs are made.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Modification of Services</h3>
                <p>
                  The Company reserves the right to add, modify or delete any content or 
                  features available in the Services at any time at its sole discretion.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Personal and Non-Commercial Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Personal and Non-Commercial Use Limitation</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The Services offered by the App are intended solely for the purpose of 
                facilitating the use of the Device. Unless otherwise specified, the App 
                is for your personal and non-commercial use. You may not modify, copy, 
                distribute, transmit, display, perform, reproduce, publish, license, 
                create derivative works from, transfer, or sell any information, software, 
                products or Services obtained from the App.
              </p>
            </div>
          </section>

          {/* Section 5: Third Party Sites */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Links to Third Party Sites</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The App may contain links to or feeds from other web sites/applications 
                ("Linked Sites"). The Linked Sites are not under the control of the 
                Company and the Company is not responsible for the contents of any Linked 
                Site. The inclusion of any link does not imply endorsement by the Company 
                of the site or any association with its operators.
              </p>
            </div>
          </section>

          {/* Section 6: Prohibited Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Unlawful or Prohibited Use</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                As a condition of your use of the App, you warrant to the Company that 
                you will not use the App for any purpose that is unlawful or prohibited 
                by this T&C. You may not use the App in any manner which could damage, 
                disable, overburden or impair the Services.
              </p>
              <p>
                The users are not entitled to use any kind of measures, mechanisms or 
                tools (software or hardware) that could interfere with the functioning 
                of the App or any of its Services.
              </p>
            </div>
          </section>

          {/* Section 7: Liability Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Liability Disclaimer</h2>
            <div className="bg-amber-50 rounded-lg p-6">
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-amber-800">
                  IMPORTANT DISCLAIMER:
                </p>
                <p>
                  The Company makes no representations about the compatibility, suitability, 
                  reliability, availability, timeliness and accuracy of the information, 
                  software and services contained on the App for any purpose. All such 
                  information, software and services are provided "AS IS" without warranty 
                  of any kind.
                </p>
                <p>
                  The Company shall not be responsible for unauthorized access to or 
                  alteration of your transmissions or data, any material or data sent 
                  or received or not sent or received, or any transactions entered into 
                  through the App.
                </p>
                <p>
                  In no event shall the Company be liable for any direct, indirect, 
                  punitive, incidental, special, consequential damages or any damages 
                  whatsoever arising out of the use of the App.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Termination/Access Restriction</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The Company reserves the right to blacklist, disable and terminate 
                users from further using the App or its Services.
              </p>
              <p>
                The Company reserves the right, at its sole discretion, to terminate 
                your access to any or all Services of the App at any time, without notice.
              </p>
            </div>
          </section>

          {/* Section 9: General Terms */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">9. General</h2>
            </div>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Registration</h3>
                <p>
                  In order to use the Services through the App, you are required to 
                  login and authenticate the account for the first time using a valid 
                  mobile phone number or email-ID, authenticated through a one-time 
                  password authentication process.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Content Restrictions</h3>
                <p>
                  You shall not host, display, upload, modify, publish, transmit, 
                  update or share any information which is harmful, harassing, 
                  blasphemous, defamatory, obscene, pornographic, libelous, invasive 
                  of another's privacy, hateful, or racially, ethnically objectionable, 
                  or otherwise unlawful in any manner whatsoever.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Agricultural Expert</h3>
                <p>
                  You agree that as a part of the Service the Company allows you to 
                  ask agricultural related queries from agricultural experts on our App. 
                  The Company may use your profile information and data against the 
                  question posted by you which shall be visible to all users of the App.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The Company owns title, interest and rights, including all related 
                intellectual property rights, in the App and the user acknowledges 
                that such ownership shall include all intellectual property rights 
                arising from any suggestions, enhancement requests, recommendations 
                or other information provided by the user.
              </p>
            </div>
          </section>

          {/* Section 11: Governing Law */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">11. Governing Law and Jurisdiction</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                If a dispute arises regarding the Terms, the laws of the Republic of 
                India will apply and shall be subject to the exclusive jurisdiction 
                of courts in Bengaluru, India.
              </p>
              <p>
                All disputes shall be governed under the laws of India and are subject 
                to the jurisdiction of the Courts of Bengaluru only.
              </p>
            </div>
          </section>

          {/* Section 12: Indemnity */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Indemnity</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                You shall indemnify and hold harmless the Company, its owners, employees, 
                licensee, affiliates, subsidiaries, group companies and their respective 
                officers, directors, agents, and employees, from any claim or demand, 
                or actions including reasonable attorneys' fees, made by any third party 
                due to or arising out of your use of AGROWEX Technologies Pvt. Ltd. or 
                breach of these Terms.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Contact Details</h2>
            <div className="bg-emerald-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                For any queries or complaints regarding these Terms & Conditions, 
                please contact:
              </p>
              <div className="space-y-2 text-gray-900">
                <p className="font-semibold">Ankur Gupta</p>
                <p className="font-semibold">AGROWEX Technologies Pvt. Ltd.</p>
                <p>
                  <span className="font-semibold">Email:</span>{' '}
                  <a href="mailto:ankur.gupta@agrowex.in" className="text-emerald-600 hover:text-emerald-700">
                    ankur.gupta@agrowex.in
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default TermsConditions;