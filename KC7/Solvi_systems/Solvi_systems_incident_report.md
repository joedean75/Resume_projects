# Incident Report: Solvi Systems Security Breach

## Executive Summary

On May 1, 2024, Solvi Systems experienced a significant security breach that resulted in unauthorized access to sensitive company data and potential infection of multiple internal systems. The attack appears to have been initiated through a phishing campaign and exploited vulnerabilities in the company's docks-ics product. This report outlines the details of the incident, its impact, and recommendations for mitigation and future prevention.

## Incident Timeline

- 2024-05-01 00:00:00Z: First suspicious request detected
- 2024-05-01 15:51:41Z: First phishing email received by Carla Wharton
- 2024-05-03 14:48:08Z: XSS alert triggered on docks-ics product
- 2024-05-27 16:23:10Z: Evidence of lateral movement and data exfiltration

## Attack Vector

The primary attack vector appears to be a sophisticated phishing campaign targeting Solvi Systems employees. The attackers used seemingly legitimate domains (eco-awareness-update.net, energy-trends4u.net, and news-on-industry.com) to send emails with malicious attachments and links. The emails often contained subjects related to energy industry trends and business opportunities.

## Impact

1. Data Exfiltration:
   - Multiple sensitive documents were accessed and exfiltrated, including:
     - Energy_Industry_Trends_2024_4_Solvi.docx
     - Recent_Mergers_and_Acquisitions_in_Energy_Industry.docx
     - Eco_Awareness_Update_2024.docx
     - Docks_ICS_User_Guide.pdf

2. System Compromise:
   - At least 6 internal systems show signs of infection
   - A malicious file (ecobug.exe) was downloaded 39 times
   - The attacker gained admin-level access and created a user account named "gu@rd!an"

3. Lateral Movement:
   - Evidence of the attacker moving laterally within the network, accessing shared drives and collecting data from multiple systems

4. Potential Product Vulnerability:
   - An XSS vulnerability was detected in the docks-ics product, which may have been exploited by the attacker

## Affected Systems and Individuals

- Carla Wharton (Sales Representative): Initial target of phishing campaign
- Alexei Petrov (Docks Customer Success Manager): System accessed during lateral movement
- Jamie Lee (Project Manager for Docks ICS): System accessed during lateral movement
- Taylor Green (DOCKS ICS Security Lead): Account used for data exfiltration

## Attacker Information

- Username: gu@rd!an
- Password: abc1toothree
- Admin group: Yes
- Multiple infected systems:
  - JUSP-LAPTOP
  - BHMF-LAPTOP
  - MQQY-MACHINE
  - BEFQ-DESKTOP
  - 1WA7-DESKTOP

## Recommendations

1. Immediate Actions:
   - Isolate and forensically analyze all affected systems
   - Reset passwords for all compromised accounts
   - Block all identified malicious IP addresses and domains at the firewall level
   - Conduct a thorough scan of all systems for the presence of ecobug.exe and other potential malware

2. Short-term Actions:
   - Implement multi-factor authentication across all systems
   - Conduct a security audit of the docks-ics product to identify and patch vulnerabilities
   - Enhance email filtering and security awareness training for all employees
   - Review and tighten access controls for shared drives and sensitive data

3. Long-term Actions:
   - Implement a robust Endpoint Detection and Response (EDR) solution
   - Develop and regularly test an Incident Response Plan
   - Conduct regular penetration testing and vulnerability assessments
   - Implement a comprehensive Security Information and Event Management (SIEM) system

## Conclusion

This incident highlights significant vulnerabilities in Solvi Systems' current security posture. By implementing the recommended actions and maintaining a proactive approach to cybersecurity, the company can greatly reduce the risk of similar incidents in the future and better protect its sensitive data and systems.
