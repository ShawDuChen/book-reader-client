import { Fragment } from "react/jsx-runtime";

export default function AgreementPage() {
  const contents: Array<{
    title: string;
    children: Array<{ title: string; contents: string[] }>;
  }> = [
    {
      title: "隐私政策",
      children: [
        {
          title: "1. 适用范围",
          contents: [
            "1.1. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            "1.2. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "1.3. qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
          ],
        },
        {
          title: "2. 采集和使用个人信息",
          contents: [
            "2.1. qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            "2.2. pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp",
            "2.3. iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "2.4. uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
          ],
        },
        {
          title: "3. 信息共享与转让",
          contents: [
            "3.1. mmmmmmmmmmmmmmmmmmmm",
            "3.2. nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
            "3.3. bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
          ],
        },
        {
          title: "4. 保存期限",
          contents: [
            "4.1. vvvvvvvvvvvv",
            "4.2. jjjjjjjjjjjjjjjjjjjjjjjjj",
            "4.3. yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
          ],
        },
        {
          title: "5. 删除个人信息",
          contents: [
            "5.1. wwwwwwwwwwwwwwwwwwww",
            "5.2. llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
          ],
        },
        {
          title: "6. 联系我们",
          contents: [
            "6.1. kkkkkkkkkk",
            "6.2. hhhhhhhhhhhhhhh",
            "6.3. gggggggggggggggggggggg",
            "6.4. fffffffffffffffffffffffff",
          ],
        },
      ],
    },
    {
      title: "法律规范",
      children: [
        {
          title: "1. 适用范围",
          contents: [
            "1.1. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            "1.2. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "1.3. qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
          ],
        },
        {
          title: "2. 采集和使用个人信息",
          contents: [
            "2.1. qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            "2.2. pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp",
            "2.3. iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "2.4. uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
          ],
        },
        {
          title: "3. 信息共享与转让",
          contents: [
            "3.1. mmmmmmmmmmmmmmmmmmmm",
            "3.2. nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
            "3.3. bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
          ],
        },
        {
          title: "4. 保存期限",
          contents: [
            "4.1. vvvvvvvvvvvv",
            "4.2. jjjjjjjjjjjjjjjjjjjjjjjjj",
            "4.3. yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
          ],
        },
        {
          title: "5. 删除个人信息",
          contents: [
            "5.1. wwwwwwwwwwwwwwwwwwww",
            "5.2. llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
          ],
        },
        {
          title: "6. 联系我们",
          contents: [
            "6.1. kkkkkkkkkk",
            "6.2. hhhhhhhhhhhhhhh",
            "6.3. gggggggggggggggggggggg",
            "6.4. fffffffffffffffffffffffff",
          ],
        },
      ],
    },
  ];

  return (
    <section className="gradient-container">
      <section className="size-container overflow-auto">
        {contents?.map((item, index) => (
          <section key={index} className="space-y-4">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            {item.children?.map((child, cIndex) => (
              <Fragment key={cIndex}>
                <h2 className="text-xl font-semibold">{child.title}</h2>
                {child.contents?.map((text, tIndex) => (
                  <p key={tIndex} className="text-md">
                    {text}
                  </p>
                ))}
              </Fragment>
            ))}
          </section>
        ))}
      </section>
    </section>
  );
}
