cat list.txt | % { ls -r "**/$_" } | % { cp "$($_.FullName)" "<destination>" }
