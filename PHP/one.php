<?php   

$url = 'http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml';

function convert_xml_json($url) {

    $fileContents= file_get_contents($url);
    $simpleXml = simplexml_load_string($fileContents);
    $json = json_encode($simpleXml);
    return $json;
}

print_r(convert_xml_json($url));