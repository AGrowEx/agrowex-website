import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Users, Globe } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

const PrivacyPolicy = () => {
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
            <Shield className="h-8 w-8 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="mt-4 text-gray-600">
            Thank you for using the Bhoomi App! Your privacy is important to us. 
            This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          
          {/* Section 1: Scope */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. Scope</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                This Application (hereinafter referred to as "App", "we", "our", "us") 
                is committed to protecting and respecting your privacy.
              </p>
              <p>
                This policy, together with the terms and conditions of the App (this 
                "Privacy Policy"), outlines App's privacy practices regarding the 
                collection, use and safeguard of your information through the App and 
                the services offered thereupon.
              </p>
              <p>
                Your clicking of the "I agree" button and submission of personal 
                information or if you are a minor, the submission of your personal 
                information either by your parents (or your guardian) or by you with the 
                permission of your parents (or guardian) to the App will be deemed as 
                your acceptance of this Privacy Policy.
              </p>
            </div>
          </section>

          {/* Section 2: Changes to the Privacy Policy */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">2. Changes to the Privacy Policy</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                We are obligated to protect your information in accordance with 
                applicable laws, and regulations.
              </p>
              <p>
                This Privacy Policy is subject to modification based on changes in the 
                business, legal and regulatory requirements and will be updated online. 
                We will notify you whenever any change to the Terms and Conditions are 
                made. You are encouraged to periodically visit this page to review the 
                Privacy Policy and any changes to it.
              </p>
            </div>
          </section>

          {/* Section 3: Third Party Services */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">3. Third Party Services</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Please note that your mobile service provider, mobile operating system 
                provider, third party applications (including the applications 
                pre-loaded on your smart phones powered by Android/iOS platform or 
                customized Android ROM ("Device"), social media platforms and websites 
                that you access may also collect, use and share information about you 
                and your usage. We cannot control how these third parties collect, use, 
                share or secure this information. For information about third-party 
                privacy practices, please consult their respective privacy policies.
              </p>
            </div>
          </section>

          {/* Section 4: Personal Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">4. Personal Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Personal information is defined as information that can be used to 
                identify you and may include details such as your name, age, gender, 
                contact information and your interests as personally identified in 
                products and services.
              </p>
              <p>The following is the manner in which we collect, use, share and retain personal information:</p>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Collection</h3>
                  <p className="text-gray-700">
                    You agree that the App may collect such personal information, whenever 
                    relevant, to help providing you with information and to complete any 
                    transaction or provide any product you have requested or authorized.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Usage</h3>
                  <p className="text-gray-700">
                    The App seeks this information to validate and process your request 
                    for services, improve the quality of the App, assist you in determining 
                    which services best meet your needs, facilitate our internal business 
                    operations, and provide you with recommendations and marketing 
                    communications.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sharing</h3>
                  <p className="text-gray-700">
                    We may disclose personal information to our affiliates when necessary 
                    to perform services on our behalf or on your behalf. We may also share 
                    personal information with external organizations or individuals if we 
                    believe that access, use, preservation or disclosure of the information 
                    is reasonably necessary to meet applicable law, detect fraud, or protect 
                    against harm to rights, property or safety.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Retention</h3>
                  <p className="text-gray-700">
                    The information so collected shall be retained only for a limited duration 
                    necessary to fulfil the purposes outlined herein unless a longer retention 
                    period is required or permitted by law.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Non-Personal Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Non-Personal Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Non-personal information is defined as any data that does not personally 
                identify you and may include unique system or hardware identifiers, 
                system or application software, and peripherals.
              </p>
              <p>
                Any non-personal information, when clubbed with personal information 
                shall be treated as personal information.
              </p>
            </div>
          </section>

          {/* Section 6: Location Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Location Services</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The App may access, collect and analyse your usage of the App and other 
                information related to your location on a regular basis through Bluetooth 
                and Wi-Fi signals and other technologies for the performance of the services 
                provided by the App.
              </p>
              <p>
                Except in cases where any specific services requested by you require or 
                involve personal identification, the App collects location data anonymously 
                and in a form that does not personally identify you.
              </p>
            </div>
          </section>

          {/* Section 7: Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Information collected by cookies and other technologies are treated as 
                non-personal information. However, to the extent that IP addresses or 
                similar identifiers are considered personal information by local law, 
                we treat any information linked to such identifiers as personal information.
              </p>
            </div>
          </section>

          {/* Section 8: Access, Correction and Deletion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Access, Correction and Deletion</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The App strives hard to keep its records updated and accurate with your 
                latest information. You shall be responsible to ensure that the information 
                or data you provide from time to time is and shall be correct, current 
                and updated.
              </p>
              <p>
                You may note that deletion of certain information or withdrawal of consent 
                may lead to cancellation of your access to the App or your access to certain 
                features and services of the App.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Queries and Complaints</h2>
            <div className="bg-emerald-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                We are committed to protecting your personal information collected and 
                processed by us. In case of any feedback or concern regarding the 
                protection of your personal information, please contact:
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

export default PrivacyPolicy;