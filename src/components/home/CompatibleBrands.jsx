import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import DomeGallery from '../animations/DomeGallery';

const CompatibleBrands = () => {
  const brandGroups = [
    // First row - comp-lkkwuadj
    [
      { id: 'comp-lkkwuaep', img: 'comp-lkkwuaeq2', src: 'ea31d6_7bb6528d685b4b1d88434f6904815da9~mv2.png', alt: 'Samsung Brand Compatible with ARISS' },
      { id: 'comp-lkkwuaes', img: 'comp-lkkwuaet', src: 'ea31d6_c67eac255bed4c4baf2b8e85112d8a92~mv2.png', alt: 'LG Brand Compatible with ARISS' },
      { id: 'comp-lkkwuaeu', img: 'comp-lkkwuaev', src: 'ea31d6_bcc170641b2a42cbb4619968b5ecd011~mv2.png', alt: 'General Brand Compatible with ARISS' },
      { id: 'comp-lkkwuaew2', img: 'comp-lkkwuaex1', src: 'ea31d6_073121e7b7ad49cca580bc0a0e9941fa~mv2.png', alt: 'ARISS Brand Compatible with Mitsubishi' },
      { id: 'comp-lkkwuaey3', img: 'comp-lkkwuaez2', src: 'ea31d6_ae660545029942f3bbdf37eebcdc6ac8~mv2.png', alt: 'ARISS Brand Compatible with daikin' },
      { id: 'comp-lkkwuaf04', img: 'comp-lkkwuaf2', src: 'ea31d6_fab5259075a4491098b80b809c80df23~mv2.png', alt: 'ARISS Brand Compatible with hitachi' },
      { id: 'comp-lkkwuaf4', img: 'comp-lkkwuaf5', src: 'ea31d6_67f1dd3a8f0d4c3985dbca01c9bf4c3b~mv2.png', alt: 'ARISS Brand Compatible with bluestar' },
      { id: 'comp-lkkwqmho', img: 'comp-lkkwqmhp1', src: 'ea31d6_a7027c721cb7442eb04f04aeb64c07b0~mv2.png', alt: 'ARISS Brand Compatible with yamaha' },
      { id: 'comp-lkkwqmhq4', img: 'comp-lkkwqmhs', src: 'ea31d6_fd812074cbdf46df82b3892d5297ef37~mv2.png', alt: 'ARISS Brand Compatible with bose' },
      { id: 'comp-lkkwqmht', img: 'comp-lkkwqmhu', src: 'ea31d6_46a8eaf671d041ad95d1905273c1cd07~mv2.png', alt: 'ARISS Brand Compatible with marantz' },
      { id: 'comp-lkkwqmhv1', img: 'comp-lkkwqmhw1', src: 'ea31d6_16b83623fd124624b9cd87302b4dbf5e~mv2.png', alt: 'ARISS Brand Compatible with denon' },
      { id: 'comp-lkkwqmhx3', img: 'comp-lkkwqmhy3', src: 'ea31d6_023dd9d0081043d5ae38cb19e591029c~mv2.png', alt: 'ARISS Brand Compatible with sony' },
      { id: 'comp-lkkwqmhz4', img: 'comp-lkkwqmi03', src: 'ea31d6_0490842e86df4b72b8c268071ed68224~mv2.png', alt: 'ARISS Brand Compatible with philips' },
      { id: 'comp-lkkwqmi15', img: 'comp-lkkwqmi23', src: 'ea31d6_2a62380853c14128890a6e6bac6b4b35~mv2.png', alt: 'ARISS Brand Compatible with tata sky' },
      { id: 'comp-lkkwr5fn1', img: 'comp-lkkwr5fp', src: 'ea31d6_9e9e8c9d5cb244a9bf927d8e7f23c6ac~mv2.png', alt: 'ARISS Brand Compatible with hybec' },
      { id: 'comp-lkkwr5fr', img: 'comp-lkkwr5fs', src: 'ea31d6_8d4212b84d6f4a45b82bc5b5e89a8dfb~mv2.png', alt: 'ARISS Brand Compatible with wipro' },
      { id: 'comp-lkkwr5ft', img: 'comp-lkkwr5fu1', src: 'ea31d6_4fd57723dc4a4f8caee3c8cfb09fb8af~mv2.png', alt: 'ARISS Brand Compatible with syska' },
      { id: 'comp-lkkwr5fw', img: 'comp-lkkwr5fx', src: 'ea31d6_821bbb9015bf4223b3fd1a2e7202d2f8~mv2.png', alt: 'ARISS Brand Compatible with atomberg' },
      { id: 'comp-lkkwr5fy4', img: 'comp-lkkwr5fz3', src: 'ea31d6_6e3a2d2adc4c4556add7ee10f4c05c2c~mv2.png', alt: 'ARISS Brand Compatible with lutron' },
      { id: 'comp-lkkwr5g1', img: 'comp-lkkwr5g2', src: 'ea31d6_3633a137d9e64569b389f481d492730c~mv2.png', alt: 'ARISS Brand Compatible with endo' },
      { id: 'comp-lkkwr5g33', img: 'comp-lkkwr5g43', src: 'ea31d6_166c524a65e64852a3424f3f532c573f~mv2.png', alt: 'ARISS Brand Compatible with legrand' },
      { id: 'comp-lkkxwlse', img: 'comp-lkkxwlsf3', src: 'ea31d6_8bf8b252728b40cda8a782d0a4b3e111~mv2.png', alt: 'ARISS Brand Compatible with somfy' },
      { id: 'comp-lkkxwlsh1', img: 'comp-lkkxwlsj', src: 'ea31d6_9fb88d7c623649ddae6adc94b4f9c19d~mv2.png', alt: 'ARISS Brand Compatible with dyson' },
      { id: 'comp-lkkxwlsl', img: 'comp-lkkxwlsm', src: 'ea31d6_790f50028ecd42c89f04b9f8cd76a6f2~mv2.jpg', alt: 'ARISS Brand Compatible with Radio Motor' },
      { id: 'comp-lkkxwlsn', img: 'comp-lkkxwlso', src: 'ea31d6_2f44157dedf5414bba67b0748aa3204f~mv2.png', alt: 'ARISS Brand Compatible with CP Plus' },
      { id: 'comp-lkkxwlsp1', img: 'comp-lkkxwlsq1', src: 'ea31d6_6a27c943ea2c4e7ba97c14e7af7297ba~mv2.png', alt: 'ARISS Brand Compatible with Hikvision' },
      { id: 'comp-lkkxwlsr4', img: 'comp-lkkxwlss3', src: 'ea31d6_78b7d66e45b24dc98c7fb8ba4a9c01fe~mv2.png', alt: 'ARISS Brand Compatible with Yale' },
      { id: 'comp-lkkxwlsu', img: 'comp-lkkxwlsv', src: 'ea31d6_66d3d5ce1c784ffc9d5fd65ea256951f~mv2.png', alt: 'ARISS Brand Compatible with OSRAM' },
    ],
  ];

  return (
    <section id="comp-lkkvmub5" className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          {/* Title */}
          <div
            id="comp-lkkwxubp"
            className="mb-12"
            data-motion-enter="done"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
              COMPATIBLE BRANDS
            </h2>
          </div>
        </ScrollAnimation>

        {/* Brand Grid */}
        <div data-mesh-id="comp-lkkvmub5inlineContent" className="space-y-6">

          {brandGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              id={`comp-lkkwuadj-${groupIndex}`}
              className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-4"
            >
              {group.map((brand) => (
                <div
                  key={brand.id}
                  id={brand.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex items-center justify-center"
                  style={{
                    '--motion-width': '178px',
                    '--motion-height': '185px'
                  }}
                  data-motion-enter="done"
                >
                  <div className="w-16 h-16 md:w-16 md:h-16 flex items-center justify-center">
                    
                    <img
                      loading="lazy"
                      id={brand.img}
                      srcSet={`
                        https://static.wixstatic.com/media/${brand.src}/v1/fill/w_130,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Icons%20-%20Images%20(23).png 1x,
                        https://static.wixstatic.com/media/${brand.src}/v1/fill/w_260,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Icons%20-%20Images%20(23).png 2x
                      `}
                      src={`https://static.wixstatic.com/media/${brand.src}/v1/fill/w_130,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Icons%20-%20Images%20(23).png`}
                      alt={brand.alt}
                      className="w-full h-full object-contain"
                      width="130"
                      height="130"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompatibleBrands;