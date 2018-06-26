from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from bs4 import BeautifulSoup
import json
from collections import OrderedDict

timeout = 5

driver = webdriver.Chrome('/home/zin/다운로드/chromedriver')
driver.implicitly_wait(timeout)

def getUisInfo(id, pwd) :
    if (id == None or pwd == None):
        return

    driver.get('https://portal.sejong.ac.kr/jsp/login/uisloginSSL.jsp')

    driver.find_element_by_name('id').send_keys(id)
    driver.find_element_by_name('password').send_keys(pwd)

    driver.find_element_by_id('logbtn').click()

    try :
        WebDriverWait(driver, timeout).until(EC.presence_of_element_located((By.ID, 'SELF_STUDSELF_SUB_30SCH_SUG05_STUDSugRecordQ')))
        # print(driver.page_source)
        #btn = driver.find_elements_by_class_name("leftmn1")
        #btn[1].click()
    except TimeoutException:
        print('time out ...')



def getBlBoardInfo(id, pwd) :
    if (id == None or pwd == None):
        return

    driver = webdriver.Chrome('/home/zin/다운로드/chromedriver')
    driver.implicitly_wait(timeout)

    driver.get('https://blackboard.sejong.ac.kr/webapps/login/')

    driver.find_element_by_name('user_id').send_keys(id)
    driver.find_element_by_name('password').send_keys(pwd)

    driver.find_element_by_id('entry-login').click()
    driver.get('https://blackboard.sejong.ac.kr/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_2_1')

    try :
        WebDriverWait(driver, timeout).until(EC.presence_of_element_located((By.ID, 'anonymous_element_5')))
        # print(driver.page_source)
        return getDataBlackboard(driver.page_source)
    except TimeoutException:
        print('time out ...')
        return 'timeout error'


def getDataBlackboard(page) :
    soup = BeautifulSoup(page, 'html.parser')

    data = OrderedDict()

    all_contents = soup.find_all('div')
    dummyTxt = str(all_contents[17])

    while True:
        if (dummyTxt.find('type=Course&amp;id=') == -1) :
            break
        dummyTxt = dummyTxt[dummyTxt.find('type=Course&amp;id=') : ]

        key = dummyTxt[dummyTxt.find('_top')+6:dummyTxt.find('</a>')]
        # list.append(dummyTxt[dummyTxt.find('_top')+6:dummyTxt.find('</a>')])
        dummyTxt = dummyTxt[dummyTxt.find('</span>')+3 : ]
        if (dummyTxt.find('noItems')) :
            # print(dummyTxt[dummyTxt.find('noItems')+9 : dummyTxt.find('</span>')])
            value = dummyTxt[dummyTxt.find('noItems')+9 : dummyTxt.find('</span>')]
        # print(dummyTxt[dummyTxt.find('name')+7 : dummyTxt.find('</span>')])
        value = dummyTxt[dummyTxt.find('name')+7 : dummyTxt.find('</span>')]
        data[key] = value
        # list.append(dummyTxt[dummyTxt.find('name')+7 : dummyTxt.find('</span>')])

    return str(json.dumps(data, ensure_ascii=False, indent="\t"))

# getBlBoardInfo()
# getUisInfo()

