---
title: Increase Typing Speed With Python
date: 2021-09-11
tags: ["Coding", "Productivity", "Speed", "Python"]
---


# Increasing Typing Speed

I am not aware of its Window's counterpart, but the keyboard in iOS and MacOS come with a feature called Text Replacement (see references below). It's very handy if your work involves a lot of typing. 

But what words should you replace? 

I figured the logical thing to do is find out my most frequently used words and replace the top 25-50. I found a python script** that let's you run through a folder in your system and find the most frequently used words in the files in it. I then ran it through my journals folder; I modified it to include only those words that are longer than 3 letters and have a frequency of over 70 or more. Here's my result:

b'things' 300
b'tags:' 247
b'should' 220
b'about' 215
b'Links' 193
b"don't" 182
b'#journal' 174
b'title:Journal' 170
b'Journal' 164
b'first' 135
b'writing' 127
b'reading' 124
b'because' 123
b'these' 120
b'write' 117
b'other' 115
b'finish' 114
b'think' 109

And here's the piece of code:

	import os
	from collections import Counter

	# Open target folder
	path = 'path to folder'
	folder = os.listdir(path)
	count = Counter()
	
	# Open files in folder
	for file in folder:
	    fname = os.path.join(path,file)
	    # Add words to counter and their frequency to count
	    with open(fname, 'rb') as f:
	        count += Counter(f.read().split())
	
	# Print most frequent words in count
	for word, c in count.most_common(100):
	    if len(word) > 4 and c > 70:
	        print(word,c)

Is there a more efficient way to do this? I couldn't get my head around the glob function. Is it a better function? 


## Links

[**Source](https://stackoverflow.com/questions/27755380/how-to-find-500-most-frequent-words-in-500-text-files-in-python)

## References

A more detailed note that landed on my Feedly some while back on increasing your typing speed that got me thinking about it.

[How to type 3x faster](https://vasilishynkarenka.com/how-to-type-3x-faster/) 

Another essay that I think about often is that of [Ben Kuhn on impatience](https://www.benkuhn.net/impatient/)