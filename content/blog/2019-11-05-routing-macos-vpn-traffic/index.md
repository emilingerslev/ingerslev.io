---
title: "How to route MacOS (Catalina) traffic as you like "
date: '2019-11-05T19:00:35+01:00'
---

I often use VPN to connect to either my home or workplace and I guess that's a pretty common thing to do. When you define a VPN connection using MacOS' network settings you can tell it to either:
* just route traffic the way the VPN is configured to route
* route everything through the VPN

![send-all-traffic](./send-all-traffic.png)

If you want something in between that, then the GUI wont help you. However, if you use PPP (which is the default) then there is a nifty hook you can use: `/etc/ppp/ip-up`.

This executable file will be called with some predefined arguments every time the VPN connects and allow you to setup some routing. Fx:

```bash
#!/bin/sh
/sbin/route add 192.168.1.0/24 -interface $5
/sbin/route add 0.0.0.0/0 -interface $1
```

The file can be created if not already there, just remember to make it executable with `sudo chmod +x /etc/ppp/ip-up`

The above script will route all within 192.168.1.0/24 (classic local network subnet) to the local interface and rest goes over the VPN. It will be handy if you just want to be able to connect to your local area network while connecting to the office VPN.

The arguments above and the rest of them is:

| Argument | Description                      | Example value |
| -------- | -------------------------------- | ------------- |
| $1       | The VPN interface                | ppp0          |
| $2       | unknown                          |               |
| $3       | unknown                          | 0             |
| $4       | Your IP on VPN network           | 10.0.13.37    |
| $5       | IP of VPN gateway                | 10.0.13.1     |
| $6       | IP of your local network gateway | 192.168.1.1   |

I've been trying to find some good resources for the arguments given to `/etc/ppp/ip-up`, but no luck. Found the best description here https://superuser.com/questions/4904/how-to-selectively-route-network-traffic-through-vpn-on-mac-os-x-leopard

If you have more than one VPN connection that you use often, then the above script could come to short. To overcome this we can just switch on fx the IP of the VPN gateway like this:

```bash
#!/bin/sh

case $4 in
	192.168.1.1) # Work VPN (from home)
    if ["$6" = "192.168.1.1"]; then # if at home (or home like network)
      /sbin/route add 192.168.1.0/24 -interface $5 # subnet to Home VPN, let rest go it's normal way
    fi
    /sbin/route add 0.0.0.0/0 -interface $1
		;;
	192.168.2.1) # Home VPN
		/sbin/route add 192.168.1.0/24 -interface $1 # Route subnet to Home VPN, let rest go it's normal way
		;;
	*)
    ;;
esac
```

With this in place it:
* give me access to home network, when on remote VPN.
* it also skips the "home" network part, when using the VPN on the go.
* lastly it allows me to route stuff to my home network when using my Home VPN.

This was a lot of messy stuff just for some simple routing, but it gets the job done. And networking is messy, just ask the president:

![cables](./cables.jpg)