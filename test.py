url = 'https://www.naukri.com/react-js-developer-jobs?k=react+js+developer&nignbevent_src=jobsearchDeskGNB&ctcFilter=10to15'
page = 100
base_url, query_params = url.split('?', 1)
newburl = f"{base_url}-{page}?{query_params}" if page > 1 else url
print(newburl)