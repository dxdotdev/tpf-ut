cat list.txt | % { ls -r "**/$_.jpg" } | % { cp $_ "<destination>" }
