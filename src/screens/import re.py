import re
from bs4 import BeautifulSoup
import requests

def clean_title(title):
    return (re.sub('_', ' ', title))

def getImage(channel):
    print('begin scraping...')
    url = 'https://www.google.com/search?q='+channel+'&hl=en&tbm=isch'
    html_page = requests.get(url).text
    soup = BeautifulSoup(html_page, 'html.parser')
    images = soup.find_all("img")
    try:
        link = images[1].get('src')
    except:
        link = "default"
    return link

def get_bein_sport_low():
    file_channels = open("channels.txt", "r", encoding="utf8")
    beinsport_low = open("beinsport_low.txt", "w", encoding="utf8")
    index = 0
    for i, line in enumerate(file_channels):
        if i%2 == 0:
            if line[0:11] == 'beIN_SPORTS' and 'Low' in line :
                string = '{id: '+"{}".format(index)+', name: \''+clean_title(line)+'\','
                image = clean_title(line)

                imageUrl = "{}".format(getImage(image))
                category = '7'
            else:
                break
        if i%2 != 0:
            string += ' url: \''+line+'\'' + ", categories: ["+category+"], image: \'"+imageUrl+"' },"
            str = string.replace('\n', '')
            beinsport_low.write(str)
            index = index + 1
            string = ''
        else: continue

def get_bein_sport_sd():
    file_channels = open("channels.txt", "r", encoding="utf8")
    beinsport_sd = open("beinsport_sd.txt", "w", encoding="utf8")

    for i, line in enumerate(file_channels):
        if i % 2 == 0:
            if line[0:11] == 'beIN_SPORTS' and '_SD' in line:
                string = '{name: \'' + clean_title(line) + '\','
                image = clean_title(line)

                imageUrl = "{}".format(getImage(image))
                category = '1'
            else:
                break
        if i % 2 != 0:
            string += ' url: \'' + line + '\'' + ", categories: [" + category + "], image: \'" + imageUrl + "' },"
            str = string.replace('\n', '')
            beinsport_sd.write(str)
            string = ''
        else:
            continue


#getImage("osn")
get_bein_sport_low()
#get_bein_sport_sd()
# get_bein_sport_1080()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
