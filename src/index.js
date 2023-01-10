module.exports = function toReadable (n) {
    let a = [
        '', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    let b = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let makeGroup = ([ones,tens,huns]) => {
        return [
            num(huns) === 0 ? '' : a[huns] + ' hundred ',
            num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
            a[tens+ones] || a[ones]
        ].join('');
    };
    if (typeof n === 'number') return numToWords(String(n));
    if (n === '0')             return 'zero';
    return comp (chunk(3)) (reverse) (arr(n))
        .map(makeGroup)
        .filter(comp(not)(isEmpty))
        .reverse()
        .join(' ');
};
}
