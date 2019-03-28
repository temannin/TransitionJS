import requests

url = 'https://javascript-minifier.com/raw'
data = {'input': open('transition.js', 'rb').read()}
response = requests.post(url, data=data)

text_file = open("./transition.min.js", "w")
text_file.write(response.text)
text_file.close()