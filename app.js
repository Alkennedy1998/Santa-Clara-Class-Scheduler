var Section = require('./section.js');
var request = require("request");

var options = { method: 'POST',
    url: 'https://www.scu.edu/apps/ws/courseavail/search/4000/ugrad',
    headers:
        { 'postman-token': '7cd6dfe8-18eb-6274-990e-900d443f84d8',
            'cache-control': 'no-cache',
            cookie: '_ga=GA1.2.1247169440.1530396441; _gid=GA1.2.53034684.1530396441; _4c_=dVRhb5swEP0rE1L4FBFsMJBIaIpo1mXq1ipruo%2BTMSZYA8xskzSqym%2FvmTSd2rWROHy%2Bd%2B%2Fd2UcenEPFW2eBiJ%2BgIEJxQqJk6vzhR%2B0sHhzWWbu35otUXHPuLF5WU2erubpUsgeUo2lrgoQEEezfKFn0zKwL2L8SZpPBXq9q8CpjusVstpPejtZ8Z3M9JhuvFnmn5P3R06z3eNHPOj0TXiE%2Fm2NKtbtPsYfcPn0RcYVJL9YSSF2dblZXq7vlj2zlduko5%2F416e16mGB8S4%2B1VBOcTbB%2FKxppqiOsLrxJsIT3914LBm%2FaFmAZ7YShtdDNKUrhqYQ2UtkcWYIxFQfb2f5bA%2FTDcHc9kHAY1tsBDcPN1mpmX6%2FX2erEkfVKjVB%2Fw%2FeCHzSsSluQv2S04M0ofyVyRZXgEATG5Xa4qURdiw58W%2FfG%2B%2Ba5dZO6%2BpAeXNqbKpN9a1IEp8pkYa8Ezb3Q88EvhGZyz9XxJ1d7wfj6AqKwnyt5gMsCJ6uUbPinyGaX9uIQDqPQJyQJPRTGcRKFBBMISpgA55doC8gEV%2FGSQy%2BWAjwtjNV9dYmwbbhqbBosO5gax4rUkgEKHJizqXO5%2FL0di3pf9nHq3J%2BmEWNMAowwAlYDowMA3%2F4AoQQM1jiWDiUJmUN6GbEiQkUUx3lZxnnICj9HURKD4siHyByoAh%2F5ERB0wDfmA%2FmzHDwEwih%2BlkPhi5zt5A16LA7Q8%2F%2BLK6ihOdX84yzsv9MSO3dkVG8%2FrddV49hizDOmpLXmbyA4mgOEtezc2seg5t%2FxxRyx2EdBwkmeRDHPsZ%2FAYZJ4Hvg5pvhtISeCnSrPpZz%2FN8bQO%2BDHxyc%3D; cX_G=cx%3A1wn8gqmnl5he12x16h4gdbw4i2%3Aykmb99z9d7i4; cX_P=jairjjaa9a8h449t; _ga=GA1.2.1246405584.1477864525; MAID=h6hjO7GjjEW/hXTPEnQenQ==; __unam=6aca27b-15ebb2a87f8-b54334f-4; MACHINE_LAST_SEEN=2018-06-14T18%3A41%3A05.291-07%3A00; _vwo_uuid_v2=D7C480D70160CEE4406DF04D22DE7386F|9edbac4604ea9fd23a7320d281de7e91; _vwo_uuid=D7C480D70160CEE4406DF04D22DE7386F; s_fid=23416A566F03CBEF-1D3E8B3E6FA9F2A9; AMCV_774C31DD5342CAF40A490D44%40AdobeOrg=793872103%7CMCIDTS%7C17700%7CMCMID%7C54767819144511968814036582437993054835%7CMCAAMLH-1529632044%7C9%7CMCAAMB-1529801511%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCAID%7CNONE; _gcl_au=1.1.880407339.1537941031; PHPSESSID=85e6e5d3f55b755260969b5dcf678215; _gid=GA1.2.1598081948.1538278390',
            'accept-language': 'en-US,en;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            referer: 'https://www.scu.edu/apps/courseavail/?p=schedule',
            'content-type': 'application/x-www-form-urlencoded',
            dnt: '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            origin: 'https://www.scu.edu',
            accept: '*/*' },
    form: {
    maxRes:400,
    q:"Math 10"
    }
};
/*
request(options, function (error, response, body) {
    if (error) throw new Error(error);

    //console.log(body);
});
*/

/*
This classes array is a stack array storing course objects with the following parameters

courseTitle
className
subject
term
catalog_nbr
course_nbr
startTime
endTime
location
intructor
seatsLeft
*/






function get_data(course,options2,request){
	var classes=[];
    options2.form.q=course;

    //Function to request data and call back to return said data
    request(options2,function (error, response, body) {
        if (error) throw new Error(error);

        //Parse body string into a readable JSON format
        parsedBody=JSON.parse(response.body);

        //create an array with data of section and add it to the big array of classes
       // console.log(body);

        arr=parsedBody.results;
        for (var i = 0, len = arr.length; i < len; i++) {
            var section= new Section(parsedBody.title,
									arr[i].mtg_time_beg_1,
									arr[i].mtg_time_end_1,
									arr[i].class_nbr,
									arr[i].mtg_days_1,
									arr[i].seats_remaining);
			
			/*
            section.courseTitle=parsedBody.title;
			
            section.className=arr[i].class_descr;

            section.subject=arr[i].subject;
            section.term=arr[i].strm_descr;
            section.catalog_nbr=arr[i].catalog_nbr;
			section.course_nbr=arr[i].class_nbr;

			section.days=arr[i].mtg_days_1;
            section.startTime=arr[i].mtg_time_beg_1;
            section.endTime=arr[i].mtg_time_end_1;

            section.location=arr[i].mtg_facility_1;
            section.intructor=arr[i].instr_1;

            section.seatsLeft=arr[i].seats_remaining;
			*/
            //push the section object on the classes stack
            classes.push(section);

        }
        console.log(classes);


    });

}

//Requests and prints requested data in a stack array
//Change course name to get different search results
//get_data("COEN 79",options,request);
get_data("MATH 51",options,request);
get_data("MATH 12",options,request);
get_data("COEN 12L",options,request);