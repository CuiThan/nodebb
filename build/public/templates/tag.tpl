<div class="tag">
	
	<!-- IF breadcrumbs.length -->
<ol class="breadcrumb">
	<!-- BEGIN breadcrumbs -->
	<li<!-- IF @last --> component="breadcrumb/current"<!-- ENDIF @last --> itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" <!-- IF @last -->class="active"<!-- ENDIF @last -->>
		<!-- IF !@last --><a href="{breadcrumbs.url}" itemprop="url"><!-- ENDIF !@last -->
			<span itemprop="title">
				{breadcrumbs.text}
				<!-- IF @last -->
				<!-- IF !feeds:disableRSS -->
				<!-- IF rssFeedUrl --><a target="_blank" href="{rssFeedUrl}"><i class="fa fa-rss-square"></i></a><!-- ENDIF rssFeedUrl --><!-- ENDIF !feeds:disableRSS -->
				<!-- ENDIF @last -->
			</span>
		<!-- IF !@last --></a><!-- ENDIF !@last -->
	</li>
	<!-- END breadcrumbs -->
</ol>
<!-- ENDIF breadcrumbs.length -->
	
	<!-- IF loggedIn -->
	<button component="category/post" id="new_topic" class="btn btn-primary">[[category:new_topic_button]]</button>
	<!-- ELSE -->
	<a component="category/post/guest" href="{config.relative_path}/login" class="btn btn-primary">[[category:guest-login-post]]</a>
	<!-- ENDIF loggedIn -->
	
	<!-- IF !topics.length -->
	<div class="alert alert-warning">[[tags:no_tag_topics]]</div>
	<!-- ENDIF !topics.length -->

	<div class="category">
		<div component="category" class="topic-list" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="{nextStart}" data-set="{set}">
    <meta itemprop="itemListOrder" content="descending">
    <!-- IF topics.length -->
    <div class="row topics-header hidden-xs hidden-sm">
        <div class="col-md-8 col-xs-12"><div class="header-title">[[global:topics]]</div></div>
        <div class="col-md-1"><div class="header-title">[[global:posts]]</div></div>
        <div class="col-md-1"><div class="header-title">[[global:views]]</div></div>
        <div class="col-md-2"><div class="header-title">Last Reply</div></div>
    </div>
    <!-- ENDIF topics.length -->
    <!-- BEGIN topics -->
    <div component="category/topic" class="row category-item {function.generateTopicClass}" data-tid="{topics.tid}" data-index="{topics.index}" data-cid="{topics.cid}" itemprop="itemListElement">
		<meta itemprop="name" content="{function.stripTags, title}">
		<div class="col-md-8 col-xs-12">
			<!-- IF showSelect -->
	        <div class="checkbox pull-left" component="topic/select">
                <label>
                    <div class="select"></div>
                    <i class="input-helper"></i>
                </label>
            </div>
	        <!-- ENDIF showSelect -->
		    <div class="topic-author">
    		    <a href="<!-- IF topics.user.userslug -->{config.relative_path}/user/{topics.user.userslug}<!-- ELSE -->#<!-- ENDIF topics.user.userslug -->" class="pull-left">
    				<!-- IF topics.thumb -->
    				<img src="{topics.thumb}" class="user-img" alt="{topics.user.username}" />
    				<!-- ELSE -->
    				<!-- IF topics.user.picture -->
    				<img class="user-avatar" component="user/picture" data-uid="{topics.user.uid}" src="{topics.user.picture}" alt="{topics.user.username}" />
    				<!-- ELSE -->
    				<div class="user-icon" style="background-color: {topics.user.icon:bgColor};">{topics.user.icon:text}</div>
    				<!-- ENDIF topics.user.picture -->
    				<!-- ENDIF topics.thumb -->
    			</a>
    		</div>
    		<div component="topic/header" class="title">
    			<i component="topic/pinned" class="fa fa-thumb-tack <!-- IF !topics.pinned -->hide<!-- ENDIF !topics.pinned -->" title="[[topic:pinned]]"></i>
				<i component="topic/locked" class="fa fa-lock <!-- IF !topics.locked -->hide<!-- ENDIF !topics.locked -->" title="[[topic:locked]]"></i>
				<i component="topic/moved" class="fa fa-arrow-circle-right <!-- IF !topics.oldCid -->hide<!-- ENDIF !topics.oldCid -->" title="[[topic:moved]]"></i>
    		    <!-- IF !topics.noAnchor -->
				<a href="{config.relative_path}/topic/{topics.slug}<!-- IF topics.bookmark -->/{topics.bookmark}<!-- ENDIF topics.bookmark -->" itemprop="url">{topics.title}</a>
				<!-- ELSE -->
				<span>{topics.title}</span>
				<!-- ENDIF !topics.noAnchor -->

				<small>
					<a href="<!-- IF topics.user.userslug -->{config.relative_path}/user/{topics.user.userslug}<!-- ELSE -->#<!-- ENDIF topics.user.userslug -->">{topics.user.username}</a> &bull; <span class="timeago" title="{topics.timestampISO}"></span>
				</small>
    		</div>
		</div>
		<div class="col-md-1 hidden-xs hidden-sm">
		    <div class="total-post-count human-readable-number" title="{topics.postcount}">
		        {topics.postcount}
		    </div>
		</div>
		<div class="col-md-1 hidden-xs hidden-sm">
		    <div class="total-view-count human-readable-number" title="{topics.viewcount}">
		        {topics.viewcount}
		    </div>
		</div>
		<div class="col-md-2 hidden-xs hidden-sm">
		    <div class="teaser" component="topic/teaser">
		        <!-- IF topics.unreplied -->
				<p>
					[[category:no_replies]]
				</p>
				<!-- ELSE -->
		        <!-- IF topics.teaser.pid -->
				<!-- IF topics.teaser.user.picture -->
				<img title="{topics.teaser.user.username}" class="user-avatar" src="{topics.teaser.user.picture}" alt="{topics.teaser.user.username}" />
				<!-- ELSE -->
				<div title="{topics.teaser.user.username}" class="user-icon" style="background-color: {topics.teaser.user.icon:bgColor};">{topics.teaser.user.icon:text}</div>
				<!-- ENDIF topics.teaser.user.picture -->

				<a href="{config.relative_path}/user/{topics.teaser.user.userslug}">{topics.teaser.user.username}</a>
				<a class="permalink" href="{config.relative_path}/topic/{topics.slug}/{topics.teaser.index}">
					<span class="timeago" title="{topics.teaser.timestampISO}"></span>
				</a>
		        <!-- ENDIF topics.teaser.pid -->
		        <!-- ENDIF topics.unreplied -->
		    </div>
		</div>
	</div>
    <!-- END topics -->
</div>
		<button id="load-more-btn" class="btn btn-primary hide">[[unread:load_more]]</button>
		<!-- IF config.usePagination -->
			<div component="pagination" class="text-center pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
	<ul class="pagination hidden-xs">
		<li class="previous pull-left<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<!-- BEGIN pagination.pages -->
			<!-- IF pagination.pages.separator -->
			<li component="pagination/select-page" class="page select-page">
				<a href="#"><i class="fa fa-ellipsis-h"></i></a>
			</li>
			<!-- ELSE -->
			<li class="page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
				<a href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
			</li>
			<!-- ENDIF pagination.pages.separator -->
		<!-- END pagination.pages -->

		<li class="next pull-right<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>
	</ul>

	<ul class="pagination hidden-sm hidden-md hidden-lg">
		<li class="first<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>
		</li>

		<li class="previous<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<li component="pagination/select-page" class="page select-page">
			<a href="#">{pagination.currentPage} / {pagination.pageCount}</a>
		</li>

		<li class="next<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>

		<li class="last<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?page={pagination.pageCount}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
		</li>
	</ul>
</div>
		<!-- ENDIF config.usePagination -->
	</div>
</div>