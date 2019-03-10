# Tersus

Tersus is a VS Code extension that shows you only the line number of the line you're on, however it does not function as intended due to the issues described below.

* VS Code does not allow us to manipulate the line-number column via an extension so we can't show/hide the line numbers there.

* VS Code provides an API to manipulate the gutter for decorations thou, but the decorations overlap. There is an undocumented option for resizing the gutter width, but even on a wider gutter a line-number PNG with transparent background and right alighment still overlaps with a debug red-dot decoration, hiding it.

Plus the whole pregenerated line-number PNGs look suspicious.

This project will be left in this *broken* state and not be revisitied until someone has another idea of how to solve the issues above or VS Code provides the needed API.
