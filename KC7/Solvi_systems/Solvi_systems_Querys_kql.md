Employees
| where role == "CTO"

Email
| where recipient == 'alexis_khoza@solvisystems.com'
| count 

Email
| where sender has "eskom.co.za"
|distinct sender
| count 

OutboundNetworkEvents
| where src_ip == '10.10.0.7'
| distinct url
| count 

PassiveDns
| where domain contains "real"
| distinct domain
| count 

PassiveDns
| where domain == "bit.ly"
| distinct ip

let mary_ips = 
Employees
|where name has "Mary"
| distinct ip_addr;
OutboundNetworkEvents
| where src_ip in (mary_ips)
|distinct url
| count  

let mary_login = Employees
|where name has 'Mary'
|distinct username;
AuthenticationEvents
| where username in (mary_login)
|count 


SecurityAlerts
| take 10

InboundNetworkEvents
| where url contains "alert"

InboundNetworkEvents
| where user_agent contains "Opera/8.64"
| where timestamp between (datetime("2024-05-03") .. datetime("2024-05-05"))
| distinct src_ip

InboundNetworkEvents
| where src_ip == '98.117.26.236' or src_ip == '56.6.30.190' or src_ip == '105.78.23.64'or src_ip == '13.201.46.208'
//| where timestamp between (datetime('2024-05-03') .. datetime('2024-05-04')) 

PassiveDns
| where ip == '98.117.26.236' or ip == '56.6.30.190' or ip == '105.78.23.64'or ip == '13.201.46.208'
|distinct domain
  

Email
| where sender has "eco-awareness-update.net"

Email
| take 10

Email
| where  has_any ("eco-awareness-update.net", "energy-trends4u.net", "news-on-industry.com") or recipient has_any ("eco-awareness-update.net", "energy-trends4u.net", "news-on-industry.com") or subject has_any ("eco-awareness-update.net", "energy-trends4u.net", "news-on-industry.com")
//| project TimeGenerated, SenderAddress, RecipientAddress, Subject, AttachmentCount
//| sort by TimeGenerated desc

Email
| where sender contains "eco-awareness-update" or sender contains "energy-trends4u" or sender contains "news-on-industry"
//|count 


let suspicous_email_recipent =
Email
| where link contains "eco-awareness-update" or link contains "energy-trends4u" or link contains "news-on-industry"
| distinct recipient;
Employees
|where email_addr in (suspicous_email_recipent)

Employees
| where email_addr == 'carla_wharton@solvisystems.com'

OutboundNetworkEvents
| where url == 'http://news-on-industry.com/search/online/files/public/Energy_Industry_Trends_2024_4_Solvi.docx'

FileCreationEvents
| where hostname == 'JUSP-LAPTOP'
| where timestamp >= datetime(2024-05-01T15:57:41Z)



Email
| where link contains "eco-awareness-update" or link contains "energy-trends4u" or link contains "news-on-industry"
| extend parsed_link = parse_path(link)
| extend file = tostring(parsed_link.Filename)
| where isnotempty(file)
| distinct file


FileCreationEvents
| where filename == 'ecobug.exe'
|count 

ProcessEvents
| where timestamp >= datetime(2024-05-01T15:59:25Z) and username == 'cawharton'

Employees
| where username == 'makertzman'


let suspicous_ip=
NetworkFlow
| where src_ip == PassiveDns
| 


NetworkFlow
| where dest_ip == '98.117.26.236'
|distinct src_ip
|count 

InboundNetworkEvents
| where src_ip == '98.117.26.236' 

Employees
| where hire_date == datetime('2024-05-05')

ProcessEvents
| where timestamp >= datetime(2024-05-04) and process_name contains "powershell"

SecurityAlerts
| take 10

ProcessEvents
| where timestamp between (datetime(2024-05-02T00:00:00) .. datetime(2024-05-02T23:00:00))


let carla = 
Employees
|where name startswith "carla"
|project username;
ProcessEvents
|where username in (carla)
|where timestamp between (datetime(2024-05-02) .. datetime(2024-05-05))

ProcessEvents
| where process_commandline == "net use /PERSISTENT:YES"

Employees
| where hostname == 'SJ9V-MACHINE'

ProcessEvents
| where timestamp between (datetime(2024-05-27T16:23:10Z) .. datetime(2024-05-30T12:23:25Z) )
|where process_commandline contains "CollectedData.zip"
|distinct username

InboundNetworkEvents
| where url contains ".solvisystems.com"

Email
| where sender == "alexei_petrov@solvisystems.com"