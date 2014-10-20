# Presentation Title

[Arthur Muradyan]

<style>
.slide-bring-up > div {
    padding-top: 40px;
}

.slide-stick-to-left > div {
    padding-top: 30px;
    padding-left: 20px;
}

.slide pre code {
    font-size: 17pt;
}

.slide {
    color: #124191;
}

.slide h2 {
    color: #124191;
}
</style>

!SLIDE
## Slide Name

- Bullet1
- Bullet2
- Bullet3
- Bullet4
- Bullet5

<center><font size="2" color="#2E7500">Footer Text</font></center>

!SLIDE

![Dependencies](dummy.svg)

!SLIDE
## Source Info

| Module             |  Files  |  Lines  |        Directories           |
| ------------------ | ------- | ------- | ----------------------------:|
| Implementation     |   100   |  40k    | aaaaaaaaaaaaaaaaaaaaa        |
| Interface          |   10    |  55k    | bbbbbbbbbbbbbb               |

- Other1 - foo1
- Other2 - foo2

!SLIDE #DummySourceCode slide-bring-up

```
int main()
{
    std::cout << "Hello World!" << std::endl;
    int i = 0;
    while (i < 10) {
        std::cout << "i = " << i << std::endl;
        ++i;
    }
    return 0;
}
```

!SLIDE #NotAddressedTopics slide-bring-up
## Not Addressed Topics

- The Slide title is brought higher
<font color="Silver">
- Font color changed to Silver
</font>
