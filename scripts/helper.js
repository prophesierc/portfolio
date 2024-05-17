export const helpText = 
`Welcome to the Enclave Systems Mainframe
Access Level: Administrator
Protocol: Secure Shell Access
=======================================
Available Commands:
    $ [[b;red;]ENTER]         -  [[b;red;]PRESS ENTER]
    $ [[b;red;]ENTER]         -  [[b;red;]PRESS ENTER]
    $ [[b;red;]ENTER]         -  [[b;red;]PRESS ENTER]
    $ [[b;red;]ENTER]         -  [[b;red;]PRESS ENTER]
    $ [[b;red;]ENTER]         -  [[b;red;]PRESS ENTER]
    $ [[b;red;]ENTER]         -  [[b;red;]PRESS ENTER]
    $ [[b;red;]ENTER]         -  [[b;red;]PRESS ENTER]
    $ [[b;red;]ENTER]         -  [[b;red;]PRESS ENTER]
Data Encryption Status: ACTIVE
Firewall Integrity: SECURE
Memory Allocation: OPTIMIZED
=======================================
System Diagnostics: ONLINE
Network Connection: STABLE
All systems functional. Welcome, Administrator.
Remember: The only me is me, are you sure the only you is you?`
export function helpTextFunction() 
{
    this.echo(helpText, { typing: true, delay: 5 });
};

export const helpMe = `It's always okay to ask for [[b;red;]HELP]`;

export const enter = 
`# nmap -v -sS -O 10.2.2.2
Starting nmap V. 2.54BETA25
Insufficient responses for TCP sequencing (3). OS detection may be less accurate
=======================================
Interesting ports on 10.2.2.2:
(The 1539 ports scanned but not shown below are in state: closed)
Port                State           Service
22/tcp              open            ssh
=======================================
No exact OS matches for host
=======================================
Nmap run completed -- 1 IP address (1 host up) scanned`;

export const hackInit = 
`0xFE 49W &^$!%@#           0xFD 50X !$&@^#%*         0xFE 51Y @#^*!%$&         0xFD 52Z &%!@#^*$
0xF1 1A *&^%$#@!)         0xF0 2B @&$*%#!^)         0xF1 3C !*@^%$#!              0xF0 4D #@^%$!&*
 0xF2 5E $^$%&#!)          0xF1 6F *$^#@!%&)         0xF2 7G &^*%$#@!)         0xF1 8H %@^$*#!&
    0xF3 9I !$^*@%#)            0xF2 10J &^%$#!@*)        0xF3 11K ^$%*@#!)         0xF2 12L *^&@#%$!)
    0xF4 13M *&$^%#@!)        0xF3 14N #^@%$&!*          0xF4 15O @$&^%#!)         0xF3 16P *!^@&$#%)
 0xF5 17Q ^%*@#^!)          0xF4 18R @^%$#!&*)         0xF5 19S %#*^$@!)         0xF4 20T *$^&@#!%)
 0xF6 21U @^$%&#!)         0xF5 22V %#^!$&*!)          0xF6 23W *^@%$#!)          0xF5 24X !&$*^%@#)
0xF7 25Y &$@^%#!)          0xF6 26Z %#^!$&*!)        0xF7 27A !*^%$@#)         0xF6 28B $^@&*%#!
    0xF8 29C &@#!$%^          0xF7 30D ^#!&$%@           0xF8 31E $^@%#&*          0xF7 32F @*#%$^&!
0xFA 33G %^&*$#@          0xF8 34H !#%&@^$           0xFA 35I *$#@^%&          0xF8 36J &#@%*!$^`

export const hackFinish = 
    `0xFB 37K $^@&*#%          0xFA 38L #@*&$%^            0xFB 39M &*^#@%!          0xFA 40N %#&$*!@^
0xFC 41O @%^$*#!                   0xFB 42P !^#@$%&*         0xFC 43Q *!&^$%@#             0xFB 44R @*!%$^&#
    0xFD 45S ^@&*%$!              0xFC 46T &#%!$*^@           0xFD 47U !*^$&@#%         0xFC 48V $@#^%&*!
 0xFE 49W &^$!%@#              0xFD 50X !$&@^#%*           0xFE 51Y @#^*!%$&         0xFD 52Z &%!@#^*$`

