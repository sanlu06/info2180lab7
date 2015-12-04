<?php
// For PHP 5 and up

# accept a term (keyword)
# respond with a value
#$query = $_REQUEST['q'];
header("Content-type: text/xml");
print("");


$definition = <<<XML
<entries>

    <definition name="definition">

        a statement of the exact meaning of a word,especially in a dictionary.

    </definition>

    <definition name="bar">

        a place that sells alcholic beverages.

    </definition>

    <definition name="ajax">

        technique which involves the use of javascript 

    </definition>

</entries>
XML;

/*$definition = [
    "definition" => "a statement of the exact meaning of a word, especially in a dictionary.",
    "bar" => "a place that sells alcholic beverages",
    "ajax" => "technique which involves the use of javascript and xml"
];

print $query;
print "<br>";
print($definition[$query]);*/

$xml = new SimpleXMLElement($definition);
echo $xml->asXML();
?>

