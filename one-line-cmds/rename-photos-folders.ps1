# Rename photos folders from "<pattern>" to "<new name>"
ls | % { mv "$_/<pattern>" "$_/<new name>" }
