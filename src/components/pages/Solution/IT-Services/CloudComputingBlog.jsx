import React from "react";
import { motion } from "framer-motion";

const CloudComputingBlog = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-violet-600 mb-4">
            Cloud Computing: Transforming Business with Scalable Infrastructure
          </h2>
          <p className="text-lg">
            Cloud computing is revolutionizing how businesses operate by offering scalable and
            flexible infrastructure that drives innovation and efficiency.
          </p>
        </motion.div>

        {/* Blog Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-violet-600 mb-2">
              What is Cloud Computing?
            </h3>
            <p className="text-lg">
              Cloud computing refers to the delivery of computing services—such as storage,
              processing power, and databases—over the internet. Instead of relying on physical
              hardware and on-premises infrastructure, businesses can access and use these resources
              on-demand through the cloud.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-violet-600 mb-2">
              Key Benefits of Cloud Computing
            </h3>
            <ul className="list-inside list-disc space-y-3 text-lg">
              <li>
                <strong>Scalability:</strong> Cloud infrastructure allows businesses to scale their
                resources based on demand. As your business grows or faces peak usage, cloud
                computing enables easy upgrades without worrying about capacity limitations.
              </li>
              <li>
                <strong>Cost Efficiency:</strong> With cloud computing, businesses pay only for what
                they use, eliminating the need for large capital investments in hardware. This
                flexible pricing model allows businesses to optimize their IT budget.
              </li>
              <li>
                <strong>High Availability:</strong> Cloud providers offer high availability and
                disaster recovery features, ensuring that your applications and data are accessible
                even during system outages. This increases business continuity and reliability.
              </li>
              <li>
                <strong>Speed and Agility:</strong> Cloud computing accelerates deployment times,
                enabling businesses to rapidly deploy applications and services. This leads to
                faster time-to-market for products and services.
              </li>
              <li>
                <strong>Security:</strong> Leading cloud providers implement advanced security
                protocols and encryption to protect sensitive data. Cloud services also offer backup
                and recovery solutions to ensure data integrity and security.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-violet-600 mb-2">
              Popular Cloud Computing Models
            </h3>
            <p className="text-lg">
              Cloud computing services can be categorized into three primary models:
            </p>
            <ul className="list-inside list-disc space-y-2 text-lg">
              <li>
                <strong>Infrastructure as a Service (IaaS):</strong> This model provides businesses
                with computing resources like virtual machines, storage, and networking over the
                internet. Examples include Amazon Web Services (AWS) and Microsoft Azure.
              </li>
              <li>
                <strong>Platform as a Service (PaaS):</strong> PaaS delivers a platform that allows
                developers to build, deploy, and manage applications without worrying about the
                underlying infrastructure. Examples include Google App Engine and Heroku.
              </li>
              <li>
                <strong>Software as a Service (SaaS):</strong> SaaS provides software applications
                over the internet on a subscription basis. Examples include tools like Google
                Workspace, Microsoft 365, and Salesforce.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-violet-600 mb-2">
              Cloud Computing and Business Innovation
            </h3>
            <p className="text-lg">
              Cloud computing enables businesses to innovate faster by providing a flexible and
              reliable platform for new technologies. It supports the adoption of emerging
              technologies like artificial intelligence (AI), big data, and machine learning (ML) by
              providing scalable infrastructure that can process and analyze massive datasets
              quickly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3 className="text-2xl font-semibold text-violet-600 mb-2">Final Thoughts</h3>
            <p className="text-lg">
              Cloud computing is rapidly transforming how businesses operate by offering scalable,
              cost-efficient, and secure solutions that drive growth and innovation. By adopting
              cloud computing services, businesses can ensure they remain competitive in an
              ever-changing digital landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudComputingBlog;
