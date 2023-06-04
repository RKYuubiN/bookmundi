<?php
$array = [
    ['id'=>1,'price'=>200],
    ['id'=>2,'price'=>300],
    ['id'=>3,'price'=>200],
    ['id'=>4,'price'=>500],
    ['id'=>5,'price'=>400],
];

function get_price(int $price): array
{
    global $array;
    return array_filter($array,fn($arr)=>$arr['price']>$price);
}

function calculate_total_sum(): int
{
    $filtered_arrray = get_price(200);
    $sum = 0;
    foreach($filtered_arrray as $key=>$value){
        $sum = $sum + $value['price'];
    }
    return $sum;
}

print_r(get_price(200));
echo "\n";
print_r(calculate_total_sum());