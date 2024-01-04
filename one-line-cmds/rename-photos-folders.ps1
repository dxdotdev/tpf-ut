# Rename folders (inside main folder) from "<pattern>" to "<new name>"
ls | % { mv "$_/<pattern>" "$_/<new name>" }
